import { Response } from "express";
import { CustomRequest } from "../config/types";
import { patient } from "../models/patientModel";

export const showData = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const userId = req.user?.userId;
  try {
    const data = await patient.findOne({
      user: userId,
    });
    if (!data) {
      res.status(402).json({ message: "Sorry, we can't find your data " });
    }
    res.status(200).send({ message: "Welcome to Jarurat Care ", data });
  } catch (error) {
    res.status(500).send({ message: "error from  user getDataById function" });
  }
};
