import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/", {
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

