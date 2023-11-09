import mongoose from "mongoose";

export const mongodbconnection = async() =>{
    // 127.0.0.1 local host port
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/student-managment-system")
        console.log(`mongodb is connected`);
    } catch (error) {
        console.log(`mongodb is not connected`);
    }
}