
## Project Summary

DMart Backend is a scalable and modular REST API backend developed for the DMart E-Commerce platform.  
The project provides APIs for categories, subcategories, products, product images, and future e-commerce functionalities such as authentication, cart management, orders, and payments.

The backend is built using Node.js, Express.js, and MongoDB with a clean folder structure and API-first architecture.
# Project Name
DMart Backend API
# Project Description

This backend service powers the DMart E-Commerce application by providing:

- Category Management
- Subcategory Management
- Product Management
- Product Image Handling
- RESTful API Services
- Static Image Serving
- Scalable API Architecture
- Frontend Integration Support

The backend is designed to work seamlessly with React/TypeScript frontend applications.



# Tech Stack

## Backend Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors
- Socket.IO

# Project Structure

D:\E-COMMERCE PROJECT\BACKEND\public\images\fashion\mens-wear\slim-fit-casual-shirt.webp

```bash
backend/
│
├── public/
│   └── images/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── data/
│   ├── socket/
│   ├── services/
│   ├── utils/
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

# API Base URL
http://localhost:5000/api
# Available APIs

## Health Check

```http
GET /
```

Response:

```json
{
  "message": "E-commerce backend is running."
}
```

---

## Categories API

### Get All Categories

```http
GET /api/categories
```

---

### Get Category By ID

```http
GET /api/categories/:categoryId
```

Example:

```http
GET /api/categories/1

```

---

## Subcategories API

### Get Subcategory By ID

```http
GET /api/categories/:categoryId/subcategories/:subcategoryId
```

Example:

```http
GET /api/categories/1/subcategories/7
```

---

## Subcategory Photos API

### Get Subcategory Photos

```http
GET /api/categories/:categoryId/subcategories/:subcategoryId/photos
```

Example:

```http
GET /api/categories/1/subcategories/7/photos
```

---

## Products API

### Get All Products

```http
GET /api/products
```

---

# Static Image Access

Images are served statically from:

```bash
/public/images
```

Example Image URL:

```bash
http://localhost:5000/images/fashion/bags/leather-tote-bag.jpeg
```

---

# Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/e-commerce
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/dmart-backend.git
```

---

## Navigate to Backend Folder

```bash
cd backend
```

---

## Install Dependencies

```bash
npm install
```

---

# Running the Project

## Development Mode

```bash
npm run dev
```

---

## Production Mode

```bash
npm start
```

---

# Required Tools

## Software Requirements

- Node.js
- npm
- MongoDB
- VS Code

---

## Recommended VS Code Extensions

- ES7+ React Snippets
- Prettier
- ESLint
- MongoDB for VS Code
- Thunder Client / Postman

---

# Dependencies

```bash
express
cors
dotenv
mongoose
socket.io
nodemon
```

---

# Features

- REST API Architecture
- Modular Folder Structure
- Image Upload & Access
- Dynamic Categories & Products
- MongoDB Integration
- Frontend API Integration
- Error Handling
- Environment Configuration
- Scalable Backend Design

---

# Future Enhancements

- JWT Authentication
- User Login/Register
- Admin Dashboard
- Cart & Wishlist
- Payment Gateway
- Order Management
- Cloud Image Storage
- Product Search & Filtering

---

# License

This project is licensed under the MIT License.

---

# Declaration

This project is developed for educational, learning, and e-commerce development purposes.  
All product names, assets, and images used are for demo and development usage only.

---

# Support Team

DMart Development Team

For technical support or queries:

```bash
support@dmart.com
```

---

# Author

DMart Backend Development Team

---

# Version

```bash
v1.0.0
```