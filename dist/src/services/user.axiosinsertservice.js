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
exports.axiosphotodisplay = exports.axioslogin = exports.insertdatabyaxios = void 0;
const axios_1 = __importDefault(require("axios"));
const insertdatabyaxios = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post('http://localhost:5003/signup', req.body);
        return response;
    }
    catch (error) {
        console.error(error);
        return error;
    }
});
exports.insertdatabyaxios = insertdatabyaxios;
const axioslogin = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post('http://localhost:5003/login', req.body);
        return response;
    }
    catch (error) {
        console.error(error);
        return error;
    }
});
exports.axioslogin = axioslogin;
const axiosphotodisplay = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post('http://localhost:5003/recentcomment', req.body);
        return response;
    }
    catch (error) {
        console.error(error);
        return error;
    }
});
exports.axiosphotodisplay = axiosphotodisplay;
//# sourceMappingURL=user.axiosinsertservice.js.map