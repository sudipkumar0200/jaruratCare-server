import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  role: {
    type: String,
    require: true,
    enum: ["admin", "user"],
    default:"user"
  },
  passwd: {
    type: String,
    required: true,
  },
});



export const user = mongoose.model("User", userSchema);
