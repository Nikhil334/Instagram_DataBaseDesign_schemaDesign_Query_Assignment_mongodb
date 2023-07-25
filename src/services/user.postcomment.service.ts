import { Post } from "../models/user.post.schema";
import { Register } from "../models/user.register.schema";
import { Action } from "../models/user.postaction.schema";
import { Request, Response } from "express";

const commentsOnPost = async (req: Request) => {
    try {
        const post_id = req.body.post_id;
        const post_data = await Action.find({ post: post_id });
        if (!post_data) {
            return false;
        }
        const showdata = [];
        const postdata = await Post.find({ _id:post_data[0].post});
        for(let data in post_data) {
            const postcreator = postdata[0].user;
            const commentcreator = post_data[data].comments[0].user;
            const post_creator = await Register.find({ _id: postcreator });
            const post_commentor = await Register.find({ _id: commentcreator });

            const localdata = {
                comment: post_data[data].comments[0].content,
                creator: post_creator[0].username,
                comment_creator: post_commentor[0].username
            }
            showdata.push(localdata);

        }
        return showdata;
    }
    catch (err) {
        return err;
    }
}
export { commentsOnPost };


//const post_id = req.body.post_id;
            //     try {
            //         const userdata = await Post.aggregate([
            //             {
            //                 $lookup: {
            //                     from: 'Register',
            //                     localField: 'user',
            //                     foreignField: '_id',
            //                     as: 'username'
            //                 }
            //             }
            //         ]).exec();
            //         console.log(userdata)
            //         ;
            //         res.send("successs");
            //     }
            //     catch (err) {
            //         res.send(err);
            //     }
            // });