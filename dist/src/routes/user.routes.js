"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_register_controller_1 = require("../controllers/user.register.controller");
const user_datavalidation_1 = require("../middleware/user.datavalidation");
const user_sessioncontroller_1 = require("../controllers/user.sessioncontroller");
const user_register_controller_2 = require("../controllers/user.register.controller");
const user_authorization_1 = require("../middleware/user.authorization");
const userRoute = express_1.default.Router();
userRoute.route('/').get();
userRoute.route('/signup').post(user_datavalidation_1.registerUserMiddleware, user_register_controller_1.registerControl);
userRoute.route('/login').post(user_datavalidation_1.loginUserMiddleware, user_register_controller_1.loginControl);
userRoute.route("/session").post(user_authorization_1.authenticateToken, user_sessioncontroller_1.maintain_session_control);
userRoute.route("/logout").post(user_authorization_1.authenticateToken, user_register_controller_2.logoutcontrol);
exports.default = userRoute;
//# sourceMappingURL=user.routes.js.map