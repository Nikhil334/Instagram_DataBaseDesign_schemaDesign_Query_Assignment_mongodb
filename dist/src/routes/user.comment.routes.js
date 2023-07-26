"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_postcomment_controller_1 = require("../controllers/user.postcomment.controller");
const user_authorization_1 = require("../middleware/user.authorization");
const commentRoute = express_1.default.Router();
commentRoute.route('/').get();
commentRoute.route('/showcomment').post(user_authorization_1.authenticateToken, user_postcomment_controller_1.ShowCommentController);
exports.default = commentRoute;
//# sourceMappingURL=user.comment.routes.js.map