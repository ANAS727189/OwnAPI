import express from "express"
import mongoose from "mongoose";
import {apiUser} from "../models/apiUser.js";
import { allUsers, newUser, updateUser, DeleteUser} from "../controllers/users.js";

const router  = express.Router();

router.get("/users/all", allUsers);
router.post("/users/new", newUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", DeleteUser);

export default router;
