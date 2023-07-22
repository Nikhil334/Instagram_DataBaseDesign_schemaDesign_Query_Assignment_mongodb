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
exports.commentsOnPost = void 0;
const user_post_schema_1 = require("../models/user.post.schema");
const user_register_schema_1 = require("../models/user.register.schema");
const user_postaction_schema_1 = require("../models/user.postaction.schema");
const commentsOnPost = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post_id = req.body.post_id;
        const post_data = yield user_postaction_schema_1.Action.find({ post: post_id });
        if (!post_data) {
            return false;
        }
        const showdata = [];
        const postdata = yield user_post_schema_1.Post.find({ _id: post_data[0].post });
        for (let data in post_data) {
            const postcreator = postdata[0].user;
            const commentcreator = post_data[data].comments[0].user;
            const post_creator = yield user_register_schema_1.Register.find({ _id: postcreator });
            const post_commentor = yield user_register_schema_1.Register.find({ _id: commentcreator });
            const localdata = {
                comment: post_data[data].comments[0].content,
                creator: post_creator[0].username,
                comment_creator: post_commentor[0].username
            };
            showdata.push(localdata);
        }
        return showdata;
    }
    catch (err) {
        return err;
    }
});
exports.commentsOnPost = commentsOnPost;
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
//# sourceMappingURL=user.postcomment.service.js.map