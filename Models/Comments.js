import mongoose from "mongoose";

 const commentSchema = new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
         ref: "Post" 
    },
    postID:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Post" 
    },
    Comment:{
        type:String
    }

 }) 
 export const Comment = mongoose.model("Comments",commentSchema);