"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_axiosinsert_controller_1 = require("../controllers/user.axiosinsert.controller");
const axiosRoute = express_1.default.Router();
axiosRoute.route('/').get();
axiosRoute.route('/insertdatabyaxios').post(user_axiosinsert_controller_1.insertdatacontroller);
axiosRoute.route('/axioslogin').post(user_axiosinsert_controller_1.axioslogincontroller);
axiosRoute.route('/axiosphotodisplay').post(user_axiosinsert_controller_1.axiosphotocontroller);
exports.default = axiosRoute;
//# sourceMappingURL=user.axiosinsertroutes.js.map