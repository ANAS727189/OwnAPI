import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    dbName: "api",
})
.then(() => console.log("Database Connected"))
.catch((e) => console.log(e));

const schema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
});

export const apiUser = mongoose.model("apiUser", schema);

