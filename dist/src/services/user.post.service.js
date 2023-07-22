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
exports.createpost = exports.displaypost = exports.showallPost = void 0;
const user_post_schema_1 = require("../models/user.post.schema");
const createpost = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isUser = yield user_post_schema_1.Post.find({ email: req.user.email });
        if (isUser) {
            const post_details = new user_post_schema_1.Post({
                user: req.user.user_id,
                content: req.body.content,
                caption: req.body.caption,
            });
            const PostDetails = yield post_details.save();
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
});
exports.createpost = createpost;
const displaypost = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isUser = yield user_post_schema_1.Post.find({ user: req.user.user_id });
        if (isUser) {
            return isUser;
            //console.log(PostDetails);
        }
        else {
            return false;
        }
    }
    catch (err) {
        return false;
    }
});
exports.displaypost = displaypost;
const showallPost = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield user_post_schema_1.Post.find({});
        // console.log(data);
        console.log("Success in service");
        return data;
        //      res.json(data);
    }
    catch (err) {
        return false;
    }
});
exports.showallPost = showallPost;
//# sourceMappingURL=user.post.service.js.map