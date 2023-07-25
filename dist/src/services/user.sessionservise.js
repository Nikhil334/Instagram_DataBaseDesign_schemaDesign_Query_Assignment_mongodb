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
exports.maintain_session_service = void 0;
const user_sessionredis_1 = require("../middleware/user.sessionredis");
const user_verifytoken_1 = require("../middleware/user.verifytoken");
const user_register_schema_1 = require("../models/user.register.schema");
const sessions_schema_1 = require("../models/sessions.schema");
const maintain_session_service = (req, res, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const check_user = yield (0, user_verifytoken_1.verify_token)(token);
        req.user = check_user;
        const isUser = yield user_register_schema_1.Register.find({ email: req.user.email });
        //console.log(isUser);
        if (isUser) {
            const user = isUser[0]._id;
            const isSession = yield sessions_schema_1.Session.find({ user_id: user });
            console.log(isSession);
            if (!isSession.length) {
                const session_details = new sessions_schema_1.Session({
                    user_id: user,
                    status: true
                });
                const session = yield session_details.save();
                console.log("Session stored successfully");
                console.log(session);
            }
            else if (isSession.length) {
                if (!isSession[0].status) {
                    yield sessions_schema_1.Session.findOneAndUpdate({ user_id: user }, { status: !isSession[0].status });
                    console.log("Session Activate");
                }
            }
            // console.log("One session of this user is already activ");
            // res.status(201).json({message: "Session stored successfully"});
            yield (0, user_sessionredis_1.maintain_session_redis)(req, res);
        }
        else {
            // res.status(404).json({message: "User Not Found"});
            console.log("User not found");
        }
    }
    catch (err) {
        // res.status(500).json({message: "Server Error", err});
        console.log("Server Error");
    }
});
exports.maintain_session_service = maintain_session_service;
//# sourceMappingURL=user.sessionservise.js.map