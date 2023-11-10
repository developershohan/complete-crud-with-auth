import express  from "express";
import dotenv from "dotenv" 
import studentRoute from "./Routers/studentRoute.js";
import bookRoute from "./Routers/bookRoute.js";
import { mongodbconnection } from "./config/mongodb.js";


dotenv.config();
const PORT = process.env.PORT || 6060

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static("public"))


app.use(studentRoute)
app.use(bookRoute)

app.listen(PORT,()=>{
    mongodbconnection()
    console.log(`server is running on port ${PORT}`);
})


