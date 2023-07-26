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
exports.showallPostControl = exports.postControl = exports.createpostControl = void 0;
const user_post_service_1 = require("../services/user.post.service");
const createpostControl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_post_service_1.createpost)(req);
        if (!result) {
            res.status(500).send("Internal server error");
        }
        res.status(201).send("Post created successfully!");
    }
    catch (err) {
        res.status(500).send("Internal server error");
    }
});
exports.createpostControl = createpostControl;
const postControl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_post_service_1.displaypost)(req);
        //const result =  await Post.find({});
        console.log(result);
        if (!result) {
            res.status(406).send("No any post in database");
        }
        else {
            console.log(result);
            res.status(201).send(result);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.postControl = postControl;
const showallPostControl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_post_service_1.showallPost)();
        //const result =  await Post.find({});
        console.log(result);
        if (!result) {
            res.status(406).send("No any post in database");
        }
        else {
            console.log(result);
            res.status(201).send(result);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.showallPostControl = showallPostControl;
//# sourceMappingURL=user.post.controller.js.map