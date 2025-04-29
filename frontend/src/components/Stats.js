// ExchangeStats.js
import React from 'react';

function Stats() {
  return (
    <section className="exchange-stats-section container">
      <h2 className="exchange-title mb-5 fw-bold">
        BxLend is a crypto exchange for everyone.
      </h2>

      <div className="stats-container">
        <div className="stats-item">
          <div className="stats-number">1M+</div>
          <div className="stats-label">Verified users</div>
        </div>
        <div className="stats-item">
          <div className="stats-number">99+</div>
          <div className="stats-label">Countries supported</div>
        </div>
        <div className="stats-item">
          <div className="stats-number">$99B+</div>
          <div className="stats-label">Quarterly trading volume</div>
        </div>
      </div>

      <div className="hero-buttons mt-4 d-flex flex-wrap justify-content-center justify-content-lg-start">
        <button className="btn btn-primary join-button">
          Join us now
        </button>
      </div>
    </section>
  );
}

export default Stats;
