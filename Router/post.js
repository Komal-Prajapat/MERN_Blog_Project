import express  from "express";
import { CommentPostById, GetPost, addPost, deletePoste, getCommentByPostID, getPostById, likePostById, updatePost } from "../controllers/post.js";
export const postRouter = express.Router();

import { authenticate } from "../middlewares/Auth.js";

postRouter.post('/addpost' ,authenticate,addPost) 

postRouter.get('/getpost' ,GetPost) 

postRouter.get('/post/:id' , getPostById )

postRouter.put('/updatepost/:id' ,authenticate, updatePost )

postRouter.delete('/delete/:id' ,authenticate, deletePoste )

postRouter.post('/post/like/:id' ,authenticate,likePostById)

postRouter.post('/post/comment/:id' ,authenticate,CommentPostById)

postRouter.get('/post/comment/:id' ,authenticate,getCommentByPostID)