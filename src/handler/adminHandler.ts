import express from "express"
import { createData,readAllData,updateDataById,deleteDataById, readDataById } from "../controllers/adminController";
const adminHandler = express.Router();


adminHandler.post("/createData", createData );

adminHandler.get("/readAllData", readAllData)
adminHandler.get("/readDataById/:id", readDataById)
adminHandler.put("/updateDataById/:id", updateDataById)
adminHandler.delete("/deleteDataById/:id", deleteDataById)
export default adminHandler;
