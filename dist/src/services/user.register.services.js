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
exports.logoutservice = exports.loginUsers = exports.registerUsers = void 0;
const user_register_schema_1 = require("../models/user.register.schema");
const user_sessioncontroller_1 = require("../controllers/user.sessioncontroller");
const sessions_schema_1 = require("../models/sessions.schema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_sessionredis_1 = require("../middleware/user.sessionredis");
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
const loginUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
                const token = jsonwebtoken_1.default.sign({ email: user.email, user_id: user._id, username: user.username }, process.env.secretKey, { expiresIn: '60s' });
                console.log(token);
                yield (0, user_sessioncontroller_1.maintain_session_control)(req, res, token);
                return true;
            }
        }
    }
    catch (err) {
        return false;
    }
});
exports.loginUsers = loginUsers;
const logoutservice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const isUser = yield user_register_schema_1.Register.find({ email: user.email });
        console.log(isUser);
        if (isUser) {
            const id = isUser[0]._id;
            const isSession = yield sessions_schema_1.Session.find({ user_id: id });
            if (isSession) {
                if (isSession[0].status) {
                    yield sessions_schema_1.Session.findOneAndUpdate({ _id: isSession[0]._id }, { status: !isSession[0].status });
                    yield (0, user_sessionredis_1.distroySession)(req, res);
                    res.status(201).json({ message: "User logOut Successfully" });
                }
                else {
                    res.status(404).json({ message: "User is already inactiv" });
                }
            }
            else {
                res.status(404).json({ message: "Session not found" });
            }
        }
        else {
            res.status(404).json({ message: "User not found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});
exports.logoutservice = logoutservice;
//# sourceMappingURL=user.register.services.js.map