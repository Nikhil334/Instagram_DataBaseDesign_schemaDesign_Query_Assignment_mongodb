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
exports.createUsers = void 0;
const user_schema_1 = require("../models/user.schema");
const createUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const userdata = new user_schema_1.User({
        username: "Harshit Pratap",
        email: "harshit@gmail.com",
        password: "Harshit321",
        profilePicture: "https://image12.com",
        no_of_posts: 44,
        no_of_followers: 540,
        no_of_followings: 220
    });
    const result = yield userdata.save();
    console.log(result);
});
exports.createUsers = createUsers;
