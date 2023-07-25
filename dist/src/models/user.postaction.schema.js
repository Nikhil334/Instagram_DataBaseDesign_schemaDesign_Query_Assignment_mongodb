"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reply = exports.Share = exports.Like = exports.Comment = exports.Action = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const ReplySchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Register',
        Required: true
    },
    comment: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Comment',
        required: true
    },
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const CommentSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Register',
        required: true
    },
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [ReplySchema]
});
const LikeSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Register',
        Required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const ShareSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Register',
        Required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const ActionSchema = new mongoose_1.Schema({
    post: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Post',
        Required: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Register',
        Required: true
    },
    comments: [CommentSchema],
    likes: [LikeSchema],
    shares: [ShareSchema]
});
const Action = mongoose_1.default.model('Action', ActionSchema);
exports.Action = Action;
const Comment = mongoose_1.default.model('Comment', CommentSchema);
exports.Comment = Comment;
const Like = mongoose_1.default.model('Like', LikeSchema);
exports.Like = Like;
const Share = mongoose_1.default.model('Share', ShareSchema);
exports.Share = Share;
const Reply = mongoose_1.default.model('Reply', ReplySchema);
exports.Reply = Reply;
//# sourceMappingURL=user.postaction.schema.js.map