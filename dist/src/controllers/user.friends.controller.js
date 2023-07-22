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
exports.whoFollowingMeController = exports.whoFollowMeController = exports.requestacceptedcontrol = exports.requestforcontrol = void 0;
const user_friends_service_1 = require("../services/user.friends.service");
const requestforcontrol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_friends_service_1.requestforfriend)(req);
        if (result) {
            res.status(201).send(result);
        }
        else {
            res.status(500).send("Internal server error");
        }
    }
    catch (errr) {
        res.status(500).send("Internal server errror");
    }
});
exports.requestforcontrol = requestforcontrol;
const requestacceptedcontrol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_friends_service_1.requestacceptfriend)(req);
        if (result) {
            res.status(201).send(result);
        }
        else {
            res.status(500).send("Internal server error");
        }
    }
    catch (errr) {
        res.status(500).send("Internal server errror");
    }
});
exports.requestacceptedcontrol = requestacceptedcontrol;
const whoFollowMeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, user_friends_service_1.showfriendsWhoFollowMe)(req);
        if (data.length == 0) {
            res.status(404).send("no data found");
        }
        res.status(200).send(data);
    }
    catch (err) {
        res.status(500).send("Internal server error");
    }
});
exports.whoFollowMeController = whoFollowMeController;
const whoFollowingMeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, user_friends_service_1.showfriendsWhoFollowingMe)(req);
        if (data.length == 0) {
            res.status(404).send("no data found");
        }
        res.status(200).send(data);
    }
    catch (err) {
        res.status(500).send("Internal server error");
    }
});
exports.whoFollowingMeController = whoFollowingMeController;
//# sourceMappingURL=user.friends.controller.js.map