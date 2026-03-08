**HouseOfHype – Full-Stack MERN E-commerce Platform**

HouseOfHype is a modern, high-performance e-commerce solution built with the MERN stack. This project demonstrates an end-to-end integration of a responsive client storefront, a robust backend API, and a dedicated administrative control panel.

**Development Team**
•	Backend: Moraru Adriana + Moraru Florentina
•	Frontend: Moraru Adriana + Moraru Florentina
•	Admin: Moraru Adriana + Moraru Florentina + Ioniță Cristiana

**System Architecture**

As an Automation Engineering project, this platform is designed as a closed-loop system where data flows seamlessly between the user interface and the database.
   1.Frontend (React.js): A Single Page Application (SPA) designed with a monochrome aesthetic using Tailwind CSS for a minimalist, high-speed user experience.
   2.Backend (Node.js & Express): A scalable server environment handling asynchronous API requests and complex business logic.
   3.Database (MongoDB): A flexible NoSQL schema allowing for rapid updates to product attributes, such as varying sizes and categories.
   4.Admin Panel: A separate management interface providing full CRUD (Create, Read, Update, Delete) control over inventory and real-time order tracking.
   
**Key Technical Features**

   1.Secure Authentication: Implementation of JWT (JSON Web Tokens) and Bcrypt password hashing to ensure secure user and admin access
   2.Efficient Data Structures: Uses Hash Maps (O(1) complexity) for cart management to ensure instantaneous calculation of totals and quantities.
   3.Advanced Filtering: An optimized iterative algorithm (O(n) complexity) for real-time product sorting by categories like "Hanorace" (Hoodies) and "Încălțăminte" (Footwear).
   4.Media Integration: Integrated with Cloudinary for high-resolution image hosting, reducing server-side processing load.
   5.Responsive Design: Fully adapted for both desktop and mobile devices to ensure a consistent experience across all hardware.
   
 **Installation & Setup**
 
 1. Backend Setup
    
    cd backend
npm install
**Configure your .env file with MONGODB_URI and CLOUDINARY keys**
npm run server # Runs on port 4000

npm run server

 2. Frontend setup
    This is the client-facing side where users browse products.

Open a new terminal and navigate to the frontend folder: cd frontend

Install dependencies: npm install

Start the development server:
    npm run dev
The store will be available at http://localhost:5173

    3. Admin Panel Setup (The Control Room)

This allows you to add products and manage orders.

Open a third terminal and navigate to the admin folder: cd admin

Install dependencies: npm install

Start the admin dashboard:

    npm run dev
The admin panel will be available at http://localhost:5174

 **How to Use the App**

Populate Inventory: Log into the Admin Panel using the ADMIN_EMAIL and ADMIN_PASSWORD you set in your .env. Use the "Add" tab to upload your first product.

Browse & Shop: Open the Frontend, create a user account, and add items to your cart.

Manage Orders: After placing an order in the Frontend, switch back to the Admin Panel "Orders" tab to see the new entry and update its status.




