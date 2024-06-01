import mongoose from "mongoose";

 export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://quangdong8080:quangdongne@cluster0.gy5fwwh.mongodb.net/food_del").then(()=>console.log("db connected"))
}