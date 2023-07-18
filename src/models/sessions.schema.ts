import mongoose, { Schema } from "mongoose";

const SessionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        Required: true
    },
    session_time: {
        type: Date,
        default:Date.now,
        Required: true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Session = mongoose.model('Session', SessionSchema);
export { Session };