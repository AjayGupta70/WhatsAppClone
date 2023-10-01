import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection=async()=>{
    const URL=`mongodb+srv://theajaygupta7071:Ajay7071@cluster0.zrj1bmq.mongodb.net/WhatsAppClone?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{
        useUnifiedTopology:true,
        useNewUrlParser: true
      });
       console.log('Database connected successfully')
    }catch(error){
      console.log('Error while connecting with the database',error.message)
    }
}
export default Connection;