# E-Commerce

This project is a full-stack e-commerce application developed using React, TypeScript, Node.js, Express, and PostgreSQL. It provides a complete online shopping experience, including user authentication, product browsing, cart management, and order handling.

## Project Overview

The application consists of a frontend built with React and TypeScript, a backend developed with Node.js and Express, and a PostgreSQL database for storing application data. The project follows a client-server architecture where the frontend communicates with backend APIs to manage users, products, and orders.

## Technologies Used

### Frontend

* React
* TypeScript
* Vite
* CSS

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### Additional Tools

* Git
* GitHub
* OpenAI API

## Project Structure

```
E-COMMERCE PROJECT
│
├── BACKEND
├── FRONTEND
├── config
└── .gitignore
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/TEInfosystems-2023/E-Commerse.git
cd E-Commerse
```

### Backend Setup

```bash
cd BACKEND
npm install
```

Create a `.env` file inside the BACKEND directory and configure the required environment variables.

Example:

```env
PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
DB_USER=postgres
DB_PASSWORD=your_password

OPENAI_API_KEY=your_api_key
```

Start the backend server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd FRONTEND
npm install
npm run dev
```

## Database Configuration

Create a PostgreSQL database and update the database credentials in the `.env` file before running the application.

Example:

```sql
CREATE DATABASE ecommerce;
```

## Features

* User registration and login
* Product listing and browsing
* Shopping cart functionality
* Order management
* Protected routes
* PostgreSQL database integration
* REST API architecture
* AI-assisted features using OpenAI API

## Future Improvements

Some features that can be added in future versions include:

* Payment gateway integration
* Product reviews and ratings
* Wishlist functionality
* Email notifications
* Order tracking
* Admin analytics dashboard

## Author

TE Infosystems

Repository:
https://github.com/TEInfosystems-2023/E-Commerse

## License

This project was developed for learning and educational purposes.

