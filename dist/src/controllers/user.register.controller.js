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
exports.logoutcontrol = exports.loginControl = exports.registerControl = void 0;
const user_register_services_1 = require("../services/user.register.services");
const user_register_schema_1 = require("../models/user.register.schema");
const sessions_schema_1 = require("../models/sessions.schema");
const registerControl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_register_services_1.registerUsers)(req);
        if (!result) {
            res.status(406).send("Data values are not valid");
        }
        else {
            res.status(201).send(result);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.registerControl = registerControl;
const loginControl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_register_services_1.loginUsers)(req, res);
        // const result:boolean = true
        if (!result) {
            res.status(406).send({
                Login: result
            });
        }
        else {
            res.status(201).send({
                Login: result
            });
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.loginControl = loginControl;
const logoutcontrol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.logoutcontrol = logoutcontrol;
//# sourceMappingURL=user.register.controller.js.map