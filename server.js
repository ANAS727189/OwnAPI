import express from "express"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import {apiUser} from "./models/apiUser.js";
import userRoutes from "./routes/users.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cookieParser());
app.use(userRoutes);


app.get("/", (req, res) => {
    res.send("Hello World");
})


app.listen(port, () => {
    console.log(`Server is listeing on port ${port}`)
})