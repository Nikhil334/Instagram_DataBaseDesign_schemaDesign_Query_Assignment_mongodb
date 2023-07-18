import { friend} from "../models/friends.schema";

const createfriend = async (sender:any, reciever:any) => {

    const requestdata = new friend({
        sender_id:sender,
       reciever_id:reciever
    })
    const result = await requestdata.save();
    console.log(result);
}
export {createfriend};