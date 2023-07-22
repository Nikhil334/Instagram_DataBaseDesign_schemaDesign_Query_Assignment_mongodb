"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_friends_controller_1 = require("../controllers/user.friends.controller");
const user_authorization_1 = require("../middleware/user.authorization");
const friendRoute = express_1.default.Router();
friendRoute.route('/').get();
friendRoute.route('/request').post(user_authorization_1.authenticateToken, user_friends_controller_1.requestforcontrol);
friendRoute.route('/accepting').post(user_authorization_1.authenticateToken, user_friends_controller_1.requestacceptedcontrol);
friendRoute.route('/followers').get(user_authorization_1.authenticateToken, user_friends_controller_1.whoFollowMeController);
friendRoute.route('/following').get(user_authorization_1.authenticateToken, user_friends_controller_1.whoFollowingMeController);
exports.default = friendRoute;
//# sourceMappingURL=user.friends.routes.js.map