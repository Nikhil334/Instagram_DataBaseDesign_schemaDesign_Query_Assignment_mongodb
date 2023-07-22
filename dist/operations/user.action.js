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
exports.createAction = void 0;
const user_postaction_schema_1 = require("../models/user.postaction.schema");
const createAction = (postId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const action = new user_postaction_schema_1.Action({
        post: postId,
    });
    const comment = new user_postaction_schema_1.Comment({ user: userId, content: 'Nice' });
    action.comments.push(comment);
    const like = new user_postaction_schema_1.Like({
        user: userId
    });
    action.likes.push(like);
    const share = new user_postaction_schema_1.Share({
        user: userId
    });
    action.shares.push(share);
    const reply = new user_postaction_schema_1.Reply({
        user: userId,
        content: 'good'
    });
    const x = 1;
    const action_save = yield action.save();
    // if (x == 1) {
    const comment_save = yield comment.save();
    // }
    // else {
    comment.comments.push(reply);
    const like_save = yield like.save();
    const share_save = yield share.save();
    const reply_save = yield reply.save();
    // }
    console.log('Comment added successfully');
});
exports.createAction = createAction;
