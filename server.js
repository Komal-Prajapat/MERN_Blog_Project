import express  from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import userRouter from './Router/user.js'
 import bodyParser from 'express'

//creating Config file
const app = express()
config({  
    path:'.env'
})
app.use(bodyParser.json()) 

//userRouter

app.use('/api',userRouter);




//DB Connection
mongoose.connect(process.env.MONGOURL,{
    dbName : "Blog_MERN"
}).then(()=>console.log("connected..."))


//setup server
const port=  process.env.PORT ; 
app.listen( port,(req,res)=>{
    console.log(`server is connected..${port}`)
});
