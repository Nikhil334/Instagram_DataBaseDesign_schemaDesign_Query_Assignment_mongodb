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
exports.createPost = void 0;
const user_post_schema_1 = require("../models/user.post.schema");
const createPost = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const postdata = new user_post_schema_1.Post({
        content: 'https://image45',
        caption: "Be human, behave polite",
        no_of_likes: 44,
        no_of_comments: 20,
        user: userId
    });
    const result = yield postdata.save();
    console.log(result);
});
exports.createPost = createPost;
//# sourceMappingURL=user.post.js.map