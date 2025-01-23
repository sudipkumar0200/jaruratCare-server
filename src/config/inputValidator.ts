import z from "zod";

export const signUpInput = z.object({
  email: z.string().email().max(70),
  passwd: z.string().min(6).max(30),
  role: z.enum(["admin", "user"]).default("user"),
});
export const signInInput = z.object({
  email: z.string().email().max(70),
  passwd: z.string().min(6).max(30),
});
export const dataInput = z.object({
  user:z.string(),
  firstName: z.string().max(40),
  lastName: z.string().max(40),
  DOB: z.string(),
  gender: z.enum(["Male", "Female", "Other"]).default("Male"),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).default("B+"),
  weight: z.string(),
  height: z.string(),
});
