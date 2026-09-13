<div align="center">
  <br />
  <h1 align="center">🥢 Food Menu App</h1>
  <p align="center">Full-Stack Food Menu & Order Management Application</p>

  <div>
    <a href="https://github.com/Mati54866/food-menu-app/actions"><img src="https://github.com/Mati54866/food-menu-app/actions/workflows/ci.yml/badge.svg" alt="CI Status" /></a>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
    <img src="https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </div>
</div>

---

## 📋 Table of Contents

1. [✨ Overview](#overview)
2. [⚙️ Tech Stack](#tech-stack)
3. [🔋 Key Features](#key-features)
4. [📡 API Endpoints](#api-endpoints)
5. [🚀 Quick Start](#quick-start)
6. [🔐 Environment Setup](#environment-setup)
7. [🤝 Contributing](#contributing)

---

## <a name="overview">✨ Overview</a>

**Food Menu App** is a full-stack web application designed for recording and managing daily meal plans, food menus, beverages, and order notes. The application features a **Node.js + Express REST API** backend and a responsive **React + TypeScript + Tailwind CSS** frontend powered by Vite.

---

## <a name="tech-stack">⚙️ Tech Stack</a>

### Backend
- **Node.js** & **Express.js** — REST API routing and middleware
- **Cors** & **Body-Parser** — Cross-Origin Request Handling & JSON payload parsing
- **TypeScript / Node tools** — API data processing

### Frontend
- **React 18** — Component-based user interface
- **TypeScript** — Strict type safety for data models
- **Tailwind CSS** — Utility-first styling
- **Axios** — Asynchronous HTTP request handler
- **Vite** — Fast frontend dev server and bundler

---

## <a name="features">🔋 Key Features</a>

- 🍱 **Meal & Drink Tracking**: Log daily food menus, beverages, and custom notes.
- 🔄 **Full CRUD Operations**: Create, view, update, and delete menu items seamlessly.
- ⚡ **Real-time API Integration**: React Axios service layer interacting with Express REST endpoints.
- 🎨 **Modern Responsive Design**: Clean mobile-first UI with Tailwind CSS styling.

---

## <a name="api-endpoints">📡 API Endpoints</a>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/api/menu` | Fetch all menu entries |
| `POST` | `/api/menu` | Create a new meal record |
| `PUT` | `/api/menu/:id` | Update an existing record |
| `DELETE` | `/api/menu/:id` | Delete a meal record |

---

## <a name="quick-start">🚀 Quick Start</a>

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or `yarn`

### Running Backend & Frontend

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Mati54866/food-menu-app.git
   cd food-menu-app
   ```

2. **Start Backend Server**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. **Start Frontend Client**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
