"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import showallPost from '../services/user.post.service';
const user_authorization_1 = require("../middleware/user.authorization");
const user_datavalidation_1 = require("../middleware/user.datavalidation");
const user_post_controller_1 = require("../controllers/user.post.controller");
const postRoute = express_1.default.Router();
postRoute.route('/').get();
postRoute.route('/create').post(user_authorization_1.authenticateToken, user_datavalidation_1.checkpostmiddleware, user_post_controller_1.createpostControl);
postRoute.route('/userpost').get(user_authorization_1.authenticateToken, user_post_controller_1.postControl);
postRoute.route('/allposts').get(user_authorization_1.authenticateToken, user_post_controller_1.showallPostControl);
exports.default = postRoute;
//# sourceMappingURL=user.post.routes.js.map