import { CustomRequest } from "../config/types";
import { dataInput } from "../config/inputValidator";
import { Request, Response } from "express";
import { patient } from "../models/patientModel";

export const createData = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const parsedBody = dataInput.safeParse(req.body);
  if (!parsedBody.success) {
    res.status(401).json({ message: "Check your Input format" });
    return;
  }

  const userExist = await patient.findOne({
    user: parsedBody.data.user,
  });
  if (userExist) {
    res.status(401).json({ message: "An patient with this id already exists" });
    return;
  }
  try {
    const newPatient = await patient.create({
      user: parsedBody.data.user,
      firstName: parsedBody.data.firstName,
      lastName: parsedBody.data.lastName,
      DOB: parsedBody.data.DOB,
      gender: parsedBody.data.gender,
      bloodGroup: parsedBody.data.bloodGroup,
      weight: parsedBody.data.weight,
      height: parsedBody.data.height,
    });

    res.status(201).json({
      message: "Patient Registered successfully",
      newPatient,
    });
  } catch (error) {
    console.log("Error while creating Data!!", error);
    res.sendStatus(500);
  }
};
export const readAllData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const getAllData = await patient.find();
    res.status(200).send(getAllData);
  } catch (error) {
    res.status(500).send({ message: "error from  read account function" });
    return;
  }
};
export const readDataById = async (
  req: Request,
  res: Response
): Promise<void> => {
  
  try {
    const dataById = await patient.findById(req.params.id);
    res.status(200).send(dataById);
  } catch (error) {
    res.status(500).send({ message: "error from  read account function" });
    return;
  }
};
export const updateDataById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updateDataById = await patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res
      .status(200)
      .send({ message: "Patient data updated sucessfully...", updateDataById });
  } catch (error) {
    res.status(500).send({ message: "error while updating patient Data" });
  }
};
export const deleteDataById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await patient.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Patient data deleted sucessfully..." });
  } catch (error) {
    res.status(500).send({ message: "error from  deleting patient Data " });
  }
};
