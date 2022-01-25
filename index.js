import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import Connection from "./db/db.js";
import userRoute from "./routes/routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRoute);

const PORT = process.env.PORT || 5000;

Connection();

app.get('/',(req,res)=>{
    res.send("Server is running");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})