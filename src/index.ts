import express  from "express";
import dotenv from "dotenv"
import authRoutes from "../src/routes/authRoutes"
import dbConnect from "./config/db"
import usersRoute from "./routes/usersRoute"

export default dotenv.config()

const PORT = process.env.PORT || 3001;
const app = express() 
app.use(express.json())
dbConnect()
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/users", usersRoute)



app.listen(PORT,()=>{
    console.log(`Server is running at PORT : ${PORT}`)
})
