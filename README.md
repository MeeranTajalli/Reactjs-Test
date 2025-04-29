# ReactJS Developer Coding Challenge

## 🧱 Project Structure

This project consists of two separate apps:

- **Frontend** (React)
- **Backend** (Node.js + Express + Redis)

---

## 🛠 Prerequisites

Ensure the following tools are installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)
- [Git](https://git-scm.com/)
- [Redis](https://redis.io/) – running **locally**, preferably on **WSL** (Windows Subsystem for Linux)

You can use any editor like **VS Code** for development.

---

## 🚀 Getting Started

### 1. Start the Backend

```bash
cd backend
npm install
npm start
```

- The backend will run at: `http://localhost:3001`
- Ensure **Redis is running** locally, preferably via WSL:
  ```bash
  redis-server
  ```

---

### 2. Start the Frontend

```bash
cd frontend
npm install
npm start
```

- The frontend will open at: `http://localhost:3000`

---

## 📦 Features

- Responsive landing page based on a Figma design.
- Live cryptocurrency data display.
- Backend API integration and **WebSocket** support for live price updates (every 5 seconds).

---

## 🔗 API Endpoints

- **REST API**: `http://localhost:3001/v1/currencies`
- **WebSocket**: `ws://localhost:3333/currency`

---

## ✅ All Set!

Open your browser at [`http://localhost:3000`](http://localhost:3000) and enjoy the app!

---
