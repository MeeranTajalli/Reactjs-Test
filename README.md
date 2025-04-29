# ReactJS Developer Coding Challenge – Solution

## 🛠 Prerequisites

Make sure the following are installed:

- Node.js (v14 or later)
- npm (v6 or later)
- Git
- Redis (running locally, preferably through WSL if on Windows)

---

## 🚀 How to Run

### Backend

```bash
cd backend
npm install
npm start
```

- Backend server will start at `http://localhost:3001`
- WebSocket server will start at `ws://localhost:3333/currency`
- Make sure Redis is running before starting the backend:
  ```bash
  redis-server
  ```

---

### Frontend

```bash
cd frontend
npm install
npm start
```

- Frontend app will open at `http://localhost:3000`

---

## 🔗 API Endpoints

- REST API: `http://localhost:3001/v1/currencies`
- WebSocket: `ws://localhost:3333/currency`

---

## ✅ Project Ready

Open [`http://localhost:3000`](http://localhost:3000) to view the app.
