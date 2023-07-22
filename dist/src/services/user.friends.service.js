"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showfriendsWhoFollowingMe = exports.showfriendsWhoFollowMe = exports.requestacceptfriend = exports.requestforfriend = void 0;
const friends_schema_1 = require("../models/friends.schema");
const requestforfriend = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const friendsdata = new friends_schema_1.friend({
            sender_id: req.user.user_id,
            reciever_id: req.body.reciever_id,
            status: "Accepted"
        });
        const data = yield friendsdata.save();
        return data;
    }
    catch (err) {
        return false;
    }
});
exports.requestforfriend = requestforfriend;
const requestacceptfriend = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const friendsdata = new friends_schema_1.friend({
            sender_id: req.body.sender_id,
            reciever_id: req.user.user_id,
            status: "Accepted"
        });
        const data = yield friendsdata.save();
        return data;
    }
    catch (err) {
        return false;
    }
});
exports.requestacceptfriend = requestacceptfriend;
const showfriendsWhoFollowMe = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield friends_schema_1.friend.find({ reciever_id: req.user.user_id, status: "Accepted" });
        if (!data) {
            return false;
        }
        return data;
    }
    catch (err) {
        return false;
    }
});
exports.showfriendsWhoFollowMe = showfriendsWhoFollowMe;
function getFollowings(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield friends_schema_1.friend.aggregate([
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
            //   console.log(result);
        }
        catch (err) {
            return err;
            //   console.error(err);
        }
    });
}
const showfriendsWhoFollowingMe = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield getFollowings(req);
        console.log(result[0].recieverInfo);
        for (let data in result) {
            if (result[data].sender_id == req.user.user_id && result[data].status == "Accepted") {
                console.log(result[data].recieverInfo[0].username);
            }
        }
    }
    catch (err) {
        console.log(33333333333333333333333);
        return false;
    }
});
exports.showfriendsWhoFollowingMe = showfriendsWhoFollowingMe;
//# sourceMappingURL=user.friends.service.js.map