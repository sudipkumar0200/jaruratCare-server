import express from "express"
import { validateToken } from "../middleware/authMiddleware";
import adminHandler from "../handler/adminHandler";
import userHandler from "../handler/userHandler";
import { validateRole } from "../middleware/roleMiddleware";
const usersRouter = express.Router();

// only admin can aceass this route
usersRouter.use("/admin",validateToken,validateRole("admin"), adminHandler );

// only user can acess this route
usersRouter.use("/user",validateToken,validateRole("user"), userHandler)



export default usersRouter;