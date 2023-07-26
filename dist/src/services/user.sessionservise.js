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
const sessions_schema_1 = require("../models/sessions.schema");
const maintain_session_service = (user, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isSession = yield sessions_schema_1.Session.find({ user_id: user._id });
        console.log(isSession);
        if (!isSession.length) {
            const session_details = new sessions_schema_1.Session({
                user_id: user.id,
                status: true
            });
            const session = yield session_details.save();
            console.log("Session stored successfully");
            console.log(session);
        }
        else if (isSession.length) {
            if (!isSession[0].status) {
                yield sessions_schema_1.Session.findOneAndUpdate({ user_id: user._id }, { status: !isSession[0].status });
                console.log("Session Activate");
            }
        }
        yield (0, user_sessionredis_1.maintain_session_redis)(user);
    }
    catch (err) {
        console.log("Server Error");
    }
});
exports.maintain_session_service = maintain_session_service;
//# sourceMappingURL=user.sessionservise.js.map