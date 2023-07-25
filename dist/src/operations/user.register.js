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
exports.registerUsers = void 0;
const user_register_schema_1 = require("../models/user.register.schema");
const registerUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const registerdata = new user_register_schema_1.Register({
        username: "Sevina Gupta",
        email: "Sevina@gmail.com",
        password: "Sevina@123"
    });
    const result = yield registerdata.save();
    console.log(result);
});
exports.registerUsers = registerUsers;
//# sourceMappingURL=user.register.js.map