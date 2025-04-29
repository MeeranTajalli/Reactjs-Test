import React, { useEffect, useState } from "react";

function CryptoTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/v1/currencies";
    const WS_URL = process.env.REACT_APP_WS_URL || "ws://localhost:3333/currency";
    const COINGECKO_API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250";

    async function loadData() {
      try {
        const backendRes = await fetch(API_URL);
        const backendData = await backendRes.json();
        const coinsFromBackend = backendData.currencies || [];

        const coingeckoRes = await fetch(COINGECKO_API);
        const coingeckoData = await coingeckoRes.json();

        const combinedData = coinsFromBackend.map((coin) => {
          const geckoCoin = coingeckoData.find(
            (c) => c.symbol.toLowerCase() === coin.symbol.toLowerCase()
          );

          return {
            id: coin.symbol,
            name: coin.name,
            symbol: coin.symbol,
            image: geckoCoin?.image || "",
            current_price: parseFloat(coin.price),
            price_change_percentage_24h: parseFloat(
              coin["24h_change"]?.replace("%", "") || 0
            ),
            market_cap: parseFloat(coin.market_cap?.replace("M", "") || 0) * 1e6,
            updated: false,
            updateDirection: null,
          };
        });

        const filteredData = combinedData.filter(coin => coin.image && coin.image.trim() !== "");
        setData(filteredData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setLoading(false);
      }
    }

    loadData();

    let socket;
    let reconnectTimer;

    function connectWebSocket() {
      socket = new WebSocket(WS_URL);

      socket.onopen = () => {
        console.log("🟢 WebSocket connected");
        if (reconnectTimer) {
          clearTimeout(reconnectTimer);
          reconnectTimer = null;
        }
      };

      socket.onmessage = (event) => {
        const parsed = JSON.parse(event.data);
        const updates = parsed.data || [];

        setData((prevData) =>
          prevData.map((coin) => {
            const update = updates.find(
              (u) => u.symbol.toLowerCase() === coin.symbol.toLowerCase()
            );
            if (!update) return coin;

            const newPrice = parseFloat(update.price);
            const priceChangeDirection = newPrice > coin.current_price ? "up" : newPrice < coin.current_price ? "down" : null;

            return {
              ...coin,
              current_price: newPrice,
              price_change_percentage_24h: parseFloat(
                update["24h_change"]?.replace("%", "") || 0
              ),
              market_cap: parseFloat(update.market_cap?.replace("M", "") || 0) * 1e6,
              updated: true,
              updateDirection: priceChangeDirection,
            };
          })
        );

        setTimeout(() => {
          setData((prevData) =>
            prevData.map((coin) => ({ ...coin, updated: false, updateDirection: null }))
          );
        }, 800); 
      };

      socket.onerror = (err) => {
        console.error("❌ WebSocket error:", err);
        socket.close();
      };

      socket.onclose = () => {
        console.warn("⚠️ WebSocket closed. Reconnecting in 5s...");
        reconnectTimer = setTimeout(connectWebSocket, 5000);
      };
    }

    connectWebSocket();

    return () => {
      if (reconnectTimer) clearTimeout(reconnectTimer);
      if (socket && socket.readyState === WebSocket.OPEN) socket.close();
    };
  }, []);

  if (loading) {
    return <p className="loading-text">Loading cryptocurrencies...</p>;
  }

  if (data.length === 0) {
    return <p className="loading-text">No cryptocurrencies found.</p>;
  }

  const top5 = [...data]
    .sort((a, b) => (b.market_cap || 0) - (a.market_cap || 0))
    .slice(0, 5);

  return (
    <div className="crypto-container">
      <h1 className="crypto-title">Popular Cryptocurrencies</h1>
      <div className="table-responsive">
        <table className="table crypto-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>24h Change</th>
              <th className="text-end">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {top5.map((coin) => (
              <tr key={coin.id} className="fade-row">
                <td className="coin-cell">
                  <img
                    src={coin.image}
                    alt={coin.symbol}
                    className="coin-image"
                  />
                  <div className="coin-names">
                    <strong className="coin-name">{coin.name}</strong>
                    <span className="coin-symbol">{coin.symbol.toUpperCase()}</span>
                  </div>
                </td>

                <td className="coin-price">
                  {coin.current_price != null ? (
                    <span className={coin.updated ? (coin.updateDirection === "up" ? "flash-green" : "flash-red") : ""}>
                      ${coin.current_price.toFixed(3)}
                    </span>
                  ) : "N/A"}
                </td>

                <td className={`price-change ${
                  coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
                }`}>
                  {coin.price_change_percentage_24h != null
                    ? `${coin.price_change_percentage_24h >= 0 ? "+" : ""}${coin.price_change_percentage_24h.toFixed(2)}%`
                    : "N/A"}
                </td>

                <td className="text-end coin-marketcap">
                  {coin.market_cap != null
                    ? `$${Math.round(coin.market_cap / 1e6).toLocaleString()}M`
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CryptoTable;
