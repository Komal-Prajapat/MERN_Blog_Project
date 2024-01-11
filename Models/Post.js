import mongoose from "mongoose";
const postSchema =  mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  imgUrl: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  rating: [{ type: Number }],
  like: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comment: [{ type: String }],
});
export const Post = mongoose.model("Post", postSchema);
