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
exports.distroySession = exports.maintain_session_redis = void 0;
const redis_1 = require("redis");
const user_register_schema_1 = require("../models/user.register.schema");
const client = (0, redis_1.createClient)();
const maintain_session_redis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    client.on('error', err => console.log('Redis client error', err));
    try {
        const user = req.user;
        const isUser = yield user_register_schema_1.Register.find({ email: user.email });
        console.log(isUser);
        if (isUser) {
            yield client.SET(isUser[0].username, JSON.stringify({
                'user_id': isUser[0]._id,
                'status': true
            }));
            const session = yield client.get(isUser[0].username);
            console.log(session);
        }
        else {
            console.log("User not found");
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.maintain_session_redis = maintain_session_redis;
const distroySession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.SET(req.user.username, JSON.stringify({
            'user_id': req.user.user_id,
            'status': false
        }));
    }
    catch (err) {
        console.log(err);
    }
});
exports.distroySession = distroySession;
//# sourceMappingURL=user.sessionredis.js.map