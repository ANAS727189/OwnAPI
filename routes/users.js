import express from "express"
import mongoose from "mongoose";
import {apiUser} from "../models/apiUser.js";
import { allUsers, newUser, userId} from "../controllers/users.js";

const router  = express.Router();

router.get("/users/all", allUsers);
router.post("/users/new", newUser);
router.get("/users/:id",userId);

export default router;