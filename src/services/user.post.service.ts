import { Post } from "../models/user.post.schema";
import { Request, Response } from "express";



const createpost = async (req: Request) => {
  try {
    const isUser = await Post.find({ email: req.user.email });
    if (isUser) {
      const post_details = new Post({
        user: req.user.user_id,
        content: req.body.content,
        caption: req.body.caption,
      });
      const PostDetails = await post_details.save();
      return PostDetails;
      //console.log(PostDetails);
    }
    else {
      return false;
    }
  }
  catch (err) {
    return false;
  }
}

const displaypost = async (req:Request) => {
  try {
    const isUser = await Post.find({ user:req.user.user_id });
    if (isUser) {
       return isUser;
      //console.log(PostDetails);
    }
    else {
      return false;
    }
  }
  catch(err){
    return false;
  }
}



const showallPost = async () => {
  try {
    const data = await Post.find({});
    // console.log(data);
    console.log("Success in service")
    return data;
    //      res.json(data);
  }
  catch (err) {
    return false;
  }
}


export { showallPost,displaypost, createpost };