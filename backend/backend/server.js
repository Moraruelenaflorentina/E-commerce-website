import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import reviewRouter from './routes/reviewRoute.js'; 
import orderModel from './models/orderModel.js';  

//app config
const app = express()
const port = process.env.PORT || 4000

connectDB()
connectCloudinary()

// Ensure TTL index is created
orderModel.syncIndexes()
  .then(() => console.log("Indexes synced (TTL active)."))
  .catch(err => console.error("Index sync error:", err));

//middleware
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(`[DEBUG] ${req.method} ${req.url}`);
  next();
});

//api endpoints
app.use('/api/user', userRouter)
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)
app.use('/api/reviews', reviewRouter);

app.get('/', (req, res) => {
  res.send("API Working")
})

app.listen(port, () => console.log('Server started on port:' + port))
