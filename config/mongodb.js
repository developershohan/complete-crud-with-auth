import mongoose from "mongoose";

export const mongodbconnection = async() =>{
    // 127.0.0.1 local host port
    try {
        const connection = await mongoose.connect("mongodb+srv://devshohanur:oHgOrUN4kaie1aql@complete-crud-with-auth.nmhlyga.mongodb.net/school-managment-system?retryWrites=true&w=majority")
        console.log(`mongodb is connected`);
    } catch (error) {
        console.log(`mongodb is not connected`);
    }
}