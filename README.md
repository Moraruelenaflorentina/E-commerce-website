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
**Images**
>![WhatsApp Image 2026-04-01 at 19 00 06](https://github.com/user-attachments/assets/5c2f9cc9-2904-4b09-9777-655f4e92908e)
>![WhatsApp Image 2026-04-01 at 19 00 06 (9)](https://github.com/user-attachments/assets/5cff0190-fe2a-41b0-9d43-e9c4c1e30b16)
>![WhatsApp Image 2026-04-01 at 19 00 06 (6)](https://github.com/user-attachments/assets/d3a89a67-84ee-4b3f-95b0-0575f4f57ed0)
>![WhatsApp Image 2026-04-01 at 19 00 06 (5)](https://github.com/user-attachments/assets/21dd5e05-5b10-4588-af52-76c48c85333d)
>![WhatsApp Image 2026-04-01 at 19 00 06 (4)](https://github.com/user-attachments/assets/f7b71b7d-f410-41b5-8b8f-466d065ce5d2)
>![WhatsApp Image 2026-04-01 at 19 00 06 (3)](https://github.com/user-attachments/assets/6a20d0dc-37f0-4eea-958a-47e295933733)
>![WhatsApp Image 2026-04-01 at 19 00 06 (2)](https://github.com/user-attachments/assets/45270a7d-12f7-437b-a323-5c0c0f119529)
>![WhatsApp Image 2026-04-01 at 19 00 06 (1)](https://github.com/user-attachments/assets/d2d115ca-d289-46e9-bd9d-841f9a557c86)
>![WhatsApp Image 2026-04-01 at 19 00 05 (3)](https://github.com/user-attachments/assets/1505a497-2b3c-439c-824c-54f49a9e02e8)
>![WhatsApp Image 2026-04-01 at 19 00 05 (2)](https://github.com/user-attachments/assets/30ab2443-c614-473d-b281-f490431433cf)
>![WhatsApp Image 2026-04-01 at 19 00 05 (1)](https://github.com/user-attachments/assets/3a2742c4-b981-4544-b545-de91bc7d194a)
>![WhatsApp Image 2026-04-01 at 19 00 05](https://github.com/user-attachments/assets/da7c2f4e-b757-49f2-83c9-176cf2c9dd34)












