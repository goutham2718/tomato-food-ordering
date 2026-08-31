# 🍅 Tomato - Full Stack Food Ordering Website

A full-stack food ordering web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** with **Stripe Payment Gateway** integration. The application enables users to browse food items, manage their cart, securely place orders, and track order status through an intuitive and responsive interface.

> **Note:** This project was built as a learning exercise by following a full-stack MERN tutorial to strengthen my understanding of modern web development, authentication, payment integration, and REST API development.

## ✨ Features

### 👤 User Features

- User Registration & Login
- Secure JWT Authentication
- Browse Food Menu
- Filter Food by Categories
- Add/Remove Items from Cart
- Update Cart Quantity
- Online Payment using Stripe
- Place Orders
- View Order History
- Responsive User Interface

### 🛠️ Admin Features

- Admin Dashboard
- Add New Food Items
- Upload Food Images
- Update Food Details
- Delete Food Items
- View Customer Orders
- Update Order Status

### ⚙️ Backend Features

- RESTful API
- JWT Authentication & Authorization
- MongoDB Database Integration
- File Upload using Multer
- Stripe Payment Integration
- Order Management
- Secure Environment Variables

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Stripe API

## 📂 Project Structure

```
tomato-food-ordering/
├── frontend/
├── backend/
├── admin/
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm
- Stripe Account

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/tomato-food-ordering.git
```

2. Navigate to the project folder

```bash
cd tomato-food-ordering
```

3. Install dependencies

Frontend

```bash
cd frontend
npm install
```

Backend

```bash
cd ../backend
npm install
```

Admin Panel

```bash
cd ../admin
npm install
```

### Environment Variables

Create a `.env` file in the **backend** directory and configure the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
```

### Run the Application

Backend

```bash
npm run server
```

Frontend

```bash
cd frontend
npm run dev
```

Admin Panel

```bash
cd admin
npm run dev
```


## 📚 What I Learned

- Building full-stack applications using the MERN stack
- Creating RESTful APIs with Express.js
- MongoDB database design using Mongoose
- JWT-based user authentication
- Stripe payment gateway integration
- File uploads with Multer
- State management in React
- CRUD operations
- Admin dashboard development
- Full-stack project architecture

## 🚀 Future Improvements

- Email notifications
- Password reset functionality
- Wishlist feature
- Search and filtering
- User profile management
- Delivery tracking
- Coupon and discount system
- Reviews and ratings
- Deployment using Docker and Cloud Services

## 📄 License

This project is for educational purposes only.

## Acknowledgements

This project was developed by following a MERN Stack tutorial to gain practical experience in full-stack web development. It is intended for learning and portfolio purposes only.