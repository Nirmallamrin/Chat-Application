import express from "express";
import { signup, login, logout } from "../controllers/userCntr.js";

const userRoute = express.Router()

userRoute.post("/signup", signup)
userRoute.post("/login", login);
userRoute.post("/logout", logout);

export default userRoute