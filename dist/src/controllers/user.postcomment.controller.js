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
exports.ShowCommentController = void 0;
const user_postcomment_service_1 = require("../services/user.postcomment.service");
const ShowCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_postcomment_service_1.commentsOnPost)(req);
        res.status(200).send(result);
        console.log("after function");
    }
    catch (err) {
        res.status(500).send("Internal Server Error");
    }
});
exports.ShowCommentController = ShowCommentController;
//# sourceMappingURL=user.postcomment.controller.js.map