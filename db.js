import mongoose from "mongoose";
// import { DB_NAME, mongoDBURL } from "./config.js";
import 'dotenv/config'
// require('dotenv').config()

const connectDB = async () =>{
    try {

        const connectionInstance = await mongoose.connect(`${process.env.mongoDBURL}/${process.env.DB_NAME}`)
        console.log(`\nMONGODB connected!! DB HOST: ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.error("MONGODB connection ERROR: ",error);
        process.exist(1);
    }
}

export {connectDB}