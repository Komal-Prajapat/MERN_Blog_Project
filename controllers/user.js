import { User } from '../Models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export const register = async(req,res)=>{
    const {name , email , password}= req.body;
    console.log(req.body)

let user  = await User.findOne({email});
if(user) return res.json({message:"User already exist"});

const hashPassword =await  bcrypt.hash(password,10);

 user = await User.create({name , email , password:hashPassword});

res.json({
    message:"user Register successfully " , user
})

} 


export const login = async(req, res)=>{
    const {email , password} = req.body
    let user = await User.findOne({email})
    
    if(!user ) return res.json({message : ' User not Exist ! ,.... '})

const valid_password = await bcrypt.compare(password , user.password);
if(!valid_password) return res.json({message :" invalid ....."})


const  token = jwt.sign({userID :user.id}, '!@#$%^&*()_+');
res.json({message:  `Welcome ${user.name}`,token})

}