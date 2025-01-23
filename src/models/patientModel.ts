import mongoose, { Schema } from "mongoose";

const patientSchema = new mongoose.Schema({
  user: String,
  firstName: String,
  lastName: String,
  DOB: String,
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  weight: String,
  height: String,
  
});
export const patient = mongoose.model("Patient", patientSchema);
