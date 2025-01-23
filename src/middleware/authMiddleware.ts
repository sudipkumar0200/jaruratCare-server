import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { CustomRequest, UserPayload } from "../config/types";
import { configDotenv } from "dotenv";
configDotenv()

export const validateToken =  (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader || typeof authHeader !== "string") {
     res.status(401).json({
      message: "Authorization header missing",
    });
    return;
  }
//  console.log("vlue of authHeader : ",authHeader)
//  console.log("vlue of secret token : ",process.env.SECRET_TOKEN)
  if (!authHeader.startsWith("Bearer ")) {
     res.status(401).json({
      success: false,
      message: "Invalid token format. Use Bearer scheme",
    });
    return;
  }

  if (!process.env.SECRET_TOKEN) {
     res.status(401).json({
      message: "Invalid secret token",
    });
    return
  }
  const token = authHeader.split(" ")[1];
  try {
    const tokenDecoded = verify(token, process.env.SECRET_TOKEN)as UserPayload;
    req.user = tokenDecoded;
    // req..userId == tokenDecoded.userId;


    console.log("the decoded userId is :", req.user.userId);
    
    
    console.log("the decoded user role is :", req.user.role);
    next();
  } catch (error) {
     res.status(401).json({ message: " You are not authorized" });
     return;
  }
};
