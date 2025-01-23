import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface CustomRequest extends Request {
  user?: {
    userId: string;
    role: string;
  };
}
export interface UserPayload extends JwtPayload {
  userId: string;
  role: string;
}
