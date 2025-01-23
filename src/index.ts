import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import dbConnect from "./config/db";
import usersRoute from "./routes/usersRoute";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
dbConnect();
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", usersRoute);
app.get("/", (req, res) => {
  res.json("Welcome to Jarurat Care API...")
})

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});

export default app;