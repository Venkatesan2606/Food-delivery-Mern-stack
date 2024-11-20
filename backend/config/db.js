import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect("Your db connection").then(()=>console.log("DB Connected"));
}