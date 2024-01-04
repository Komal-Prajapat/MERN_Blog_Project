import express  from "express";
import { config } from "dotenv";
import mongoose from "mongoose";



//creating Config file
const app = express()
config({
    path:'.env'
})


//DB Connection
mongoose.connect(process.env.MONGOURL,{
    dbName : "Blog_MERN"
}).then(()=>console.log("connected..."))


//setup server
const port=  process.env.PORT ; 
app.listen( port,(req,res)=>{
    console.log(`server is connected..${port}`)
});
