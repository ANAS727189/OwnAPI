import express from "express"
import mongoose from "mongoose";
import {apiUser} from "../models/apiUser.js";

export const allUsers = async(req, res) => {
    const users =   await apiUser.find({});
    res.json({
      success: true,
      users: users
    });
};

export const newUser = async(req, res) => {
    const {name, password, email} = req.body;
    await apiUser.create({
        name: name,
        password: password,
        email: email,
    });
    res.status(201).json({
        success: true,
        message: "User Created",
    });
};


export const updateUser =  async(req, res) => {
    const id = req.params.id;
    const user = await apiUser.findById(id);
    res.json({
        success: true,
        user: user,
    });
};


export const DeleteUser = async(req, res) => {
   const id = req.params.id;
   const user =  await apiUser.findById(id);
   await user.remove();
   res.json({
       success: true,
       message: "User Deleted",
   });
};
