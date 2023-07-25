import { Post } from "../models/user.post.schema";
import { showallPost, createpost ,displaypost} from "../services/user.post.service";
import { Request, Response } from "express";


const createpostControl = async (req: Request, res: Response) => {
  try {
    const result = await createpost(req);
    if (!result) {
      res.status(500).send("Internal server error");
    }
    res.status(201).send("Post created successfully!");
  }
  catch (err) {
    res.status(500).send("Internal server error");
  }
}


const postControl = async (req: Request, res: Response) => {
  try {

    const result = await displaypost(req);
    //const result =  await Post.find({});
    console.log(result);
    if (!result) {
      res.status(406).send("No any post in database");
    }
    else {
      console.log(result);
      res.status(201).send(result);
    }
  }
  catch (err) {
    res.status(500).send(err);
  }
}


const showallPostControl = async (req: Request, res: Response) => {
  try {

    const result = await showallPost();
    //const result =  await Post.find({});
    console.log(result);
    if (!result) {
      res.status(406).send("No any post in database");
    }
    else {
      console.log(result);
      res.status(201).send(result);
    }
  }
  catch (err) {
    res.status(500).send(err);
  }
}

export { createpostControl,postControl, showallPostControl };