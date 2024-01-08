import mongoose from "mongoose";
const postSchema = mongoose.Schema({
    title:{
        type:string,
        require:true 
    },
    discription:{
        type:string,
        require:true

    }, 
    imgUrl:{
        type:string,
        require:true,
    },
    user:{
        type:mongoose.Schema.type.objectID,
        ref:"User",
        require:true
    },
    rating:[{type:Number}],
    like:[  {type:mongoose.Schema.type.objectID,ref:"User"}],
    comment:[  {type:string,}],
});   
export default Post = mongoose.Schema("Post",postSchema)