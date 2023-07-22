"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_register_controller_1 = require("../controllers/user.register.controller");
const user_datavalidation_1 = require("../middleware/user.datavalidation");
const userRoute = express_1.default.Router();
userRoute.route('/').get();
userRoute.route('/signup').post(user_datavalidation_1.registerUserMiddleware, user_register_controller_1.registerControl);
userRoute.route('/login').post(user_datavalidation_1.loginUserMiddleware, user_register_controller_1.loginControl);
exports.default = userRoute;
//# sourceMappingURL=user.routes.js.map