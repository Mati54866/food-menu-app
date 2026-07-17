# Food Menu App 🥡

A full-stack CRUD application for managing meal notes, menus, drinks, and daily records. Built with Node.js, Express, React, and TypeScript.

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Getting Started](#getting-started)
5. [Project Structure](#project-structure)
6. [API Endpoints](#api-endpoints)
7. [Environment Variables](#environment-variables)
8. [Author](#author)

## <a name="introduction">🤖 Introduction</a>

This is a CRUD application designed to manage meal notes. The application allows users to record menus, drinks, and the corresponding day. The **backend** is developed with **Node.js** and **Express.js**, while the **frontend** utilizes **React** with **TypeScript**. **Axios** is used for HTTP requests between the frontend and backend.

## <a name="tech-stack">⚙️ Tech Stack</a>

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Axios** - HTTP client
- **Tailwind CSS** - Styling (optional)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Backend framework
- **MongoDB** - Database (with Mongoose)
- **CORS** - Cross-origin resource sharing

## <a name="features">🔋 Features</a>

👉 **Create Meal Notes** - Add new meal entries with menu, drink, and day

👉 **Read Meal Notes** - View all saved meal records

👉 **Update Meal Notes** - Edit existing meal entries

👉 **Delete Meal Notes** - Remove unwanted records

👉 **Responsive Design** - Works on all devices

👉 **TypeScript Support** - Type-safe development

## <a name="getting-started">🚀 Getting Started</a>

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or cloud)

### Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file (see Environment Variables section)
# Run development server
npm run dev
