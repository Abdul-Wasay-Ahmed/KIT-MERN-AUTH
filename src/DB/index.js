import mongoose from "mongoose";

import {config}  from "dotenv"
config()

export const connectDB = async ()=>{

    try{
         mongoose.connect(process.env.dbURL)
 console.log("MongoDB connected")
    }
    catch(err){
console.log(err)
    }


}