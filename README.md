HouseOfHype – Full-Stack MERN E-commerce Platform

HouseOfHype is a modern, high-performance full-stack e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js).
The project demonstrates a complete end-to-end architecture including a responsive storefront, a scalable backend API, and a dedicated administrative dashboard for inventory and order management.

👥 Development Team
Role	Contributors
Backend Development:	Moraru Adriana • Moraru Florentina,
Frontend Development:	Moraru Adriana • Moraru Florentina,
Admin Dashboard:	Moraru Adriana • Moraru Florentina • Ioniță Cristiana.

🧠 System Architecture

As an Automation Engineering project, HouseOfHype follows a closed-loop architecture, where data flows continuously between the user interface, server logic, and database layer.

1️⃣ Frontend — React.js

Built as a Single Page Application (SPA)

Styled using Tailwind CSS

Minimalist monochrome UI

Optimized for speed and responsiveness

2️⃣ Backend — Node.js + Express

Handles asynchronous API requests

Implements authentication and business logic

Provides RESTful endpoints for products, users, and orders

3️⃣ Database — MongoDB

Flexible NoSQL schema

Efficient storage for products with dynamic attributes such as:

sizes

categories

images

pricing

4️⃣ Admin Panel

A dedicated management interface that allows administrators to:

Add new products

Update inventory

Track orders in real time

Perform full CRUD operations

⚙️ Tech Stack

Frontend

React

Tailwind CSS

Vite

Backend

Node.js

Express.js

JWT Authentication

Bcrypt

Database

MongoDB

Mongoose

Cloud Services

Cloudinary (image hosting)

🚀 Key Technical Features
🔐 Secure Authentication

JWT (JSON Web Tokens) for session management

Bcrypt hashing for secure password storage

⚡ Efficient Cart Management

Cart implemented using Hash Maps

Enables O(1) time complexity for quantity updates and price calculations

🔎 Real-Time Product Filtering

Optimized O(n) filtering algorithm

Supports category-based sorting such as:

Hanorace (Hoodies)

Încălțăminte (Footwear)

☁️ Media Management

Product images stored via Cloudinary

Reduces server storage and processing load

📱 Responsive Design

Fully responsive UI

Optimized for:

Desktop

Tablets

Mobile devices

🛠️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/HouseOfHype.git
cd HouseOfHype
1️⃣ Backend Setup

Navigate to the backend folder:

cd backend

Install dependencies:

npm install

Create a .env file and configure:

MONGODB_URI=your_database_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET=your_secret
JWT_SECRET=your_secret
ADMIN_EMAIL=admin@email.com
ADMIN_PASSWORD=your_password

Start the backend server:

npm run server

Server runs on:

http://localhost:4000
2️⃣ Frontend Setup (Storefront)

Open a new terminal:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev

Frontend runs on:

http://localhost:5173
3️⃣ Admin Panel Setup

Open a third terminal:

cd admin

Install dependencies:

npm install

Run the admin dashboard:

npm run dev

Admin panel runs on:

http://localhost:5174
📦 How to Use the Application
1️⃣ Populate Inventory

Log into the Admin Panel using the credentials defined in .env.

Use the Add Product tab to upload products.

2️⃣ Browse the Store

Open the Frontend application and:

Create a user account

Browse products

Add items to your cart

Place an order

3️⃣ Manage Orders

After an order is placed:

Open the Admin Panel

Navigate to Orders

View and update order status in real time

🎯 Project Purpose

This project demonstrates practical implementation of:

Full-stack web development

REST API architecture

Authentication systems

Database design

Admin dashboard management

Cloud media integration
