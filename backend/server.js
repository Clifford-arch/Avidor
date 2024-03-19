import dotenv from "dotenv";
import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
import products from "./data/products.js";
import productRoutes from './routes/productRoutes.js';


dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.STATUS} mode on port ${PORT}`.cyan.bold
  );
});
