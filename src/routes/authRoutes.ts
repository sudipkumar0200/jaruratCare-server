import express from "express"
import  {authSignIn,authSignUp} from "../controllers/authController";
const authRouter = express.Router();

authRouter.post("/signUp", authSignUp );

authRouter.post("/signIn", authSignIn)
export default authRouter;
