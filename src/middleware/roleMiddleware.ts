import { NextFunction, Response } from "express";
import { CustomRequest } from "../config/types";

export const validateRole = (role:string) => {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    if (!role.includes(req.user?.role as string)) {
      res.status(403).json({ message: "You are not allowed to acess this route!!!" });
     return; 
    }
    next()
  };
};
