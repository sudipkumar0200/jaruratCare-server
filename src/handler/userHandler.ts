import express from "express"
import { showData } from "../controllers/userContoller";
const userHandler = express.Router();


userHandler.get("/showData", showData);

export default userHandler;
