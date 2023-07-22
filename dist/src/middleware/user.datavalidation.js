"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkpostmiddleware = exports.loginUserMiddleware = exports.registerUserMiddleware = void 0;
const joi_1 = __importDefault(require("joi"));
const registerValidation = joi_1.default.object({
    username: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required(),
});
const loginValidation = joi_1.default.object({
    username: joi_1.default.string(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required(),
});
const checkpostcreatedata = joi_1.default.object({
    content: joi_1.default.string().required(),
    caption: joi_1.default.string().min(5).max(50).required()
});
const validatedata = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        req.body = value;
        next();
    };
};
exports.registerUserMiddleware = validatedata(registerValidation);
exports.loginUserMiddleware = validatedata(loginValidation);
exports.checkpostmiddleware = validatedata(checkpostcreatedata);
//# sourceMappingURL=user.datavalidation.js.map