import { Favourite } from "../models/favourite.schema";

const createfav = async (userId:any,postId:any) => {

    const favourite= new Favourite({
        post:postId,
        user:userId
    })
    const result = await favourite.save();
    console.log(result);
}
export {createfav};