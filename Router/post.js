import express  from "express";
import { GetPost, addPost, deletePoste, getPostById, updatePost } from "../controllers/post.js";
export const postRouter = express.Router();

import { authenticate } from "../middlewares/Auth.js";

postRouter.post('/addpost' ,authenticate,addPost) 
postRouter.get('/getpost' ,GetPost) 
postRouter.get('/post/:id' , getPostById )
postRouter.put('/updatepost/:id' ,authenticate, updatePost )
postRouter.delete('/delete/:id' ,authenticate, deletePoste )