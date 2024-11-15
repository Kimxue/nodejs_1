import express from "express";
import Usercontroller from "../controller/usercontroller.mjs";
const userRouter = express.Router();
userRouter.get("/", Usercontroller.index);
export default userRouter               