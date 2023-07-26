import { friend } from "../models/friends.schema";
import { Request } from "express";


const requestStatus = {
    Pending: "Pending",
    Accepted: "Accepted",
    Reject: "Reject"

}
let friendsdata;
const requestforfriend = async (req: Request) => {
    try {
        var setstatus: String;
        const status: Number = parseInt(req.params.status);
        if (status == 0) {
            setstatus = requestStatus.Pending;
            friendsdata = new friend({
                sender_id: req.user.user_id,
                reciever_id: req.body.reciever_id,
                status: setstatus
            });
            const data = await friendsdata.save();
            return data;
        }
        else if (status == 1) {

            setstatus = requestStatus.Accepted;
            const data = await friend.findOneAndUpdate({ $and: [{ reciever_id: req.body.reciever_id }, { sender_id: req.user.user_id }] }, { status: setstatus });
            return data;
        }
        else {
            setstatus = requestStatus.Reject;
            const data = await friend.findOneAndDelete({ $and: [{ reciever_id: req.body.reciever_id }, { sender_id: req.user.user_id }] });
            return data;
        }
    }
    catch (err) {
        return false;
    }
}


const requestacceptfriend = async (req: Request) => {
    try {
        var setstatus: String;
        const status: Number = parseInt(req.params.status);
        if (status == 0) {
            setstatus = requestStatus.Pending;
            friendsdata = new friend({
                sender_id: req.body.sender_id,
                reciever_id: req.user.user_id,
                status: setstatus
            });
            const data = await friendsdata.save();
            return data;
        }
        else if (status == 1) {

            setstatus = requestStatus.Accepted;
            const data = await friend.findOneAndUpdate({ $and: [{ sender_id: req.body.sender_id }, { reciever_id: req.user.user_id }] }, { status: setstatus });
            return data;
        }
        else {
            setstatus = requestStatus.Reject;
            const data = await friend.findOneAndDelete({ $and: [{ sender_id: req.body.sender_id }, { reciever_id: req.user.user_id }] });
            return data;
        }
    }
    catch (err) {
        return false;
    }
}



async function getFollowers(req) {
    try {
        const result = await friend.aggregate([
            // {
            //     $match:{
            //         sender_id:mongoose.schema.objectId(req.user.user_id),
            //     }
            // },
            {
                $lookup: {
                    from: 'registers',
                    localField: 'sender_id',
                    foreignField: '_id',
                    as: 'senderInfo'
                }
            },
            {
                $project: {
                    reciever_id: 1,
                    status: 1,
                    senderInfo: 1
                    // senderName: { $arrayElemAt: ['$senderInfo.name', 0] }
                }
            }
        ]);
        return result;
    } catch (err) {
        return err;
    }
}

const showfriendsWhoFollowMe = async (req: Request) => {
    try {
        // const data = await friend.find({ reciever_id: req.user.user_id, status: "Accepted" });
        const result = await getFollowers(req);
        let followers = [];
        for (let data in result) {
            if (result[data].reciever_id == req.user.user_id && result[data].status == "Accepted") {
                followers.push(result[data].senderInfo[0].username);
            }
        }
        return followers;
    }
    catch (err) {
        return err;
    }
}


async function getFollowings(req) {
    try {
        const result = await friend.aggregate([
            // {
            //     $match:{
            //         sender_id:mongoose.schema.objectId(req.user.user_id),
            //     }
            // },
            {
                $lookup: {
                    from: 'registers',
                    localField: 'reciever_id',
                    foreignField: '_id',
                    as: 'recieverInfo'
                }
            },
            {
                $project: {
                    sender_id: 1,
                    status: 1,
                    recieverInfo: 1
                    // senderName: { $arrayElemAt: ['$senderInfo.name', 0] }
                }
            }
        ]);
        return result;
    } catch (err) {
        return err;
    }
}




const showfriendsWhoFollowingMe = async (req: Request) => {
    try {
        // const data = await friend.find({ sender_id: req.user.user_id, status: "Accepted" });
        const result = await getFollowings(req);
        let followings = [];
        for (let data in result) {
            if (result[data].sender_id == req.user.user_id && result[data].status == "Accepted") {
                followings.push(result[data].recieverInfo[0].username);
            }
        }
        return followings;
    }
    catch (err) {
        return err;
    }
}


export { requestforfriend, requestacceptfriend, showfriendsWhoFollowMe, showfriendsWhoFollowingMe };