import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:Number,
        require:true,
        unique:true
    },
    })

export  const user = mongoose.model("User" ,userSchema);
 