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
exports.createfriend = void 0;
const friends_schema_1 = require("../models/friends.schema");
const createfriend = (sender, reciever) => __awaiter(void 0, void 0, void 0, function* () {
    const requestdata = new friends_schema_1.friend({
        sender_id: sender,
        reciever_id: reciever
    });
    const result = yield requestdata.save();
    console.log(result);
});
exports.createfriend = createfriend;
//# sourceMappingURL=friend.js.map