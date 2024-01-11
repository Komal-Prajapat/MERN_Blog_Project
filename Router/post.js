import express  from "express";
import { GetPost, addPost, getPostById } from "../controllers/post.js";
export const postRouter = express.Router();

import { authenticate } from "../middlewares/Auth.js";

postRouter.post('/addpost' ,authenticate,addPost) 
postRouter.get('/getpost' ,GetPost) 
postRouter.get('/post/:id' , getPostById )