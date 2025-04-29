# ReactJS Developer Coding Challenge

## Project Setup

This project consists of a **frontend** and a **backend** application.

Make sure you have installed:

- Node.js (v14 or later)
- npm (v6 or later)
- Git
- Redis (running locally for backend)

You can use any code editor (e.g., Visual Studio Code).

---

## How to Run

### Backend

```bash
cd backend
npm install
npm start
```

- The backend server will run on `http://localhost:3001`.
- Make sure Redis is running locally.

### Frontend

```bash
cd frontend
npm install
npm start
```

- The frontend React app will run on `http://localhost:3000`.

---

## Features

- Responsive landing page based on provided Figma design.
- Displays popular cryptocurrencies with live price updates.
- Data fetched from backend API and updated using WebSockets every 5 seconds.

---

## Notes

- Backend API Endpoint: `http://localhost:3001/v1/currencies`
- WebSocket Endpoint: `ws://localhost:3333/currency`

---

# 🚀 You're done!

Just open `http://localhost:3000` in your browser to view the landing page.
