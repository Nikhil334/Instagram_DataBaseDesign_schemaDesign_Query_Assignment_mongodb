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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUsers = exports.registerUsers = void 0;
const user_register_schema_1 = require("../models/user.register.schema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
dotenv_1.default.config();
const registerUsers = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salt = parseInt(process.env.SALT);
        const regdata = req.body;
        const encryptPass = yield bcrypt_1.default.hash(req.body.password, salt);
        const registerdata = new user_register_schema_1.Register({
            username: regdata.username,
            email: regdata.email,
            password: encryptPass
        });
        const result = yield registerdata.save();
        console.log(result);
        return result;
    }
    catch (err) {
        return false;
    }
});
exports.registerUsers = registerUsers;
const loginUsers = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salt = parseInt(process.env.SALT);
        const regdata = req.body;
        const email = regdata.email;
        const user = yield user_register_schema_1.Register.findOne({ email });
        if (!user) {
            return false;
        }
        else {
            const passmatch = yield bcrypt_1.default.compare(regdata.password, user.password);
            if (!passmatch) {
                return false;
            }
            else {
                //console.log("Helooo");
                const token = jsonwebtoken_1.default.sign({ email: user.email, user_id: user._id, username: user.username }, process.env.secretKey, { expiresIn: '12h' });
                console.log(token);
                return true;
            }
        }
    }
    catch (err) {
        return false;
    }
});
exports.loginUsers = loginUsers;
//# sourceMappingURL=user.register.services.js.map