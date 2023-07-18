import { Post } from "../models/user.post.schema";

const  createPost = async (userId:any)=>{

    const postdata = new Post({
       content:'https://image45',
       caption:"Be human, behave polite",
       no_of_likes:44,
       no_of_comments:20,
       user:userId
    })
    const result = await postdata.save(); 
    console.log(result);
}
export {createPost};