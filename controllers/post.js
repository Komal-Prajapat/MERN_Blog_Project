import { Post } from "../Models/Post.js";

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

export const getPostById = async (req, res) => {
  const id = req.params.id;
  let post = await Post.findById(id);
  if (!post) return res.json({ message: "User not Exist" });
  res.json({ post });
};
