"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friend = void 0;
const mongoose = require('mongoose');
const { Schema } = mongoose;
const FriendSchema = new Schema({
    sender_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        Required: true
    },
    reciever_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        Required: true
    },
    Status: {
        type: "String"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});
const friend = mongoose.model('friend', FriendSchema);
exports.friend = friend;
