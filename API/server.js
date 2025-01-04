import express from "express";
import mongoose, { Mongoose } from "mongoose";
import bodyParser from "body-parser";
import userRouter from "./Routes/user.js";
import productRouter from "./Routes/product.js";
import cartRouter from "./Routes/cart.js";
import addressRouter from "./Routes/address.js";
import cors from "cors";
import roleRouter from "./Routes/role.js";
import blogRouter from "./Routes/blog.js";

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

//home testing route
app.get("/", (req, res) => {
  res.json({ message: "this is home route" });
});

//user Router
app.use("/api/user", userRouter);

//product Router
app.use("/api/product", productRouter);

//card Router
app.use("/api/cart", cartRouter);

//address Router
app.use("/api/address", addressRouter);

//role
app.use("/api/role", roleRouter);

//blog router
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://lamabbb042:l7N0XYVvESqpDTNG@cluster0.n8tzf.mongodb.net/",
    {
      dbName: "ECOMMERCE",
    }
  )
  .then(() => {
    console.log("MongoDb connected successfully..");
  })
  .catch((err) => console.log(err));


//serve frontend in production
import path from 'path'; // Built-in Node.js module
const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './frontend', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is running on port ${port}`));
