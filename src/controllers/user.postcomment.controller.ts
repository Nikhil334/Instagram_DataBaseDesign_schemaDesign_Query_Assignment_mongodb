import { Request, Response } from "express";
import { Post } from "../models/user.post.schema";
import {Register} from "../models/user.register.schema";
import { commentsOnPost } from "../services/user.postcomment.service";
import { User } from "../models/user.schema";


const ShowCommentController = async (req: Request, res: Response) => {
    try {
    const result = await commentsOnPost(req);    
    res.status(200).send(result);
    console.log("after function");
}
    catch (err) {
    res.status(500).send("Internal Server Error");
}
}
export { ShowCommentController };