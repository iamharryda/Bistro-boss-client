# 🍽️ Bistro Boss – Restaurant Management App (MERN Stack)

🚀 **Live Demo:** [https://bistro-boss-8ffe3.web.app/](https://bistro-boss-8ffe3.web.app/)

**Bistro Boss** is a full-featured restaurant management application built with the **MERN stack** (MongoDB, Express.js, React with Vite, and Node.js). It provides an intuitive interface to manage menus, orders, users, roles, and reservations — now enhanced with **authentication and authorization** features for secure access control.

[👉 Server Repository](https://github.com/iamharryda/Bistro-boss-server)

---

## 🚀 Features

- 🔐 **Authentication & Authorization** (JWT-based)
- 📋 **Role-based Dashboards** (Admin & User)
- 🛒 **Menu & Order Management**
- 🧑‍🍳 **Staff/Admin Management**
- 📆 **Reservations**
- ⚡ **Fast and Modern UI** with Vite + Tailwind CSS
- 🔁 **Persistent Login** and Protected Routes
- 🌐 **Responsive Design**
- 💳 **Payment Intigration** with Stripe

---

## 🛠️ Tech Stack

| Frontend               | Backend           | Auth & DB     |
| ---------------------- | ----------------- | ------------- |
| React (Vite)           | Node.js + Express | Firebase Auth |
| Tailwind CSS           | REST API          | MongoDB       |
| React Router           |                   | JWT           |
| Axios / TanStack Query |                   |               |

---

## 📦 Getting Started

> 💡 **Prerequisites:** Node.js, npm, and internet access

### 1. Clone the repository

```bash
git clone https://github.com/iamharryda/bistro-boss-client.git
cd bistro-boss-client
```

### 2. install dependancy

```bash
npm install
```

### 3. Start the developement server

```bash
npm run dev
```

##🔐 Environment Variables
Create a .env.local file in the root and add your Firebase and server config:

```bash
VITE_API_URL=https://your-server-url.com
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_IMAGE_HOSTING_KEY= imgbb hosting key
VITE_PAYMENT_KEY= stripe payment key


```

## 📸 Screenshots

### 🏠 Home Page

![Home Page](./Screenshots/Screenshot%202025-07-16%20at%2022.03.36.png)

### 🧑‍🍳 Admin Dashboard

![Admin Dashboard](./Screenshots/Screenshot%202025-07-16%20at%2022.06.58.png)

### 📋 Menu Management

![Menu Management](./Screenshots/Screenshot%202025-07-16%20at%2022.06.29.png)

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Built with ❤️ by [@iamharryda](https://github.com/iamharryda)
