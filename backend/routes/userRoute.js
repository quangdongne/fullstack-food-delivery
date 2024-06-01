import express from "express";
import { loginUser, registerUser,listUser } from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/list",listUser)

export default userRouter;
