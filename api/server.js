import express from "express";
import cors from "cors";
import "dotenv/config.js"
import { connectDb } from "./config/db.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors())

connectDb();

app.use("/api/product", productRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req,res) => {
    res.send("API working")
})


app.listen(port, () => {
    console.log(`Server started on  http://localhost:${port}`)
})