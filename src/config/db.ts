import mongoose from "mongoose";

const dbConnect = async ()=>{
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI environment variable is not defined');
    }
    try {
        const isConnected = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database connected to : ${isConnected.connection.name}`)
        
    } catch (error) {

        console.log("Failed to connect to the db", error)
        process.exit(1);
        
    }

}
export default dbConnect