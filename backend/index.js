import dotenv from "dotenv" ; 
import { app } from "./app.js";
import connectDB from "./config/db.js";


dotenv.config({
    path : "./.env"
});

connectDB() 

app.listen(process.env.PORT ,()=> {
    console.log(`server is running on port ${process.env.PORT}`)
} )