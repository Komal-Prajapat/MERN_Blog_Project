import { Post } from "../Models/Post.js";
import { Comment } from "../Models/Comments.js";
export const addPost = async (req, res) => {
  const { title, description, imgUrl } = req.body;

  // console.log(req.body)
  const post = await Post.create({
    title,
    description,
    imgUrl,
    post: req.post,
  });

  res.json({ message: " post update .. ! ", post });
};

export const GetPost = async (req, res) => {
  const posts = await Post.find();
  if (posts.length == 0) return res.json({ message: "no Post" });
  res.json({ posts });
};

export const updatePost = async (req, res) => {
  const id = req.params.id;
  const { title, description, imgUrl } = req.body;
  let post = await Post.findById(id);
  if (!post) return res.json({ message: "Invaild id" });
  (post.title = title),
    (post.description = description),
    (post.imgUrl = imgUrl);
  await post.save();
  res.json({ message: "Your post has been updated !...", post });
};

export const deletePoste = async(req,res) => {
  const id = req.params.id;
 
  let post = await Post.findById(id);
  if(!post) return res.json({message:"ivaild Id"});

  await post.deleteOne();
  res.json({
    message:"Deleted"
  })

};


//get postByID
export const getPostById = async (req, res) => {
  const id = req.params.id;
  let post = await Post.findById(id);
  if (!post) return res.json({ message: "User not Exist" });
  res.json({ post });
};


//Like 

export const likePostById = async(req,res)=>{

  const id = req.params.id;
  try{
  const post = await Post.findById(id)
  if(!post) return res.json({message:'post not Exist'});
  if(post.likes.includes(req.user._id)) return res.json({message:"user already like this"});
  post.likes.push(req.user._id)

  await post.save();
  
  res.json({message:"post like",post});
 }
 catch(e){
  res.json({message:"Internal  Server Error  ",e})
  console.log(e);
 }
}


//commment 


export const CommentPostById = async(req,res)=>{
  const id = req.params.id; 
  const post = await Post.findById(id)
  if(!post) return res.json({message:'post not Exist'});

  const {comment } =req.body
  const postcomment = await Comment.create({
    comment,
  UserId:req.user,
  postId:id
  })
  res.json({message:" ********* Comment Added ******** ", postcomment})
}