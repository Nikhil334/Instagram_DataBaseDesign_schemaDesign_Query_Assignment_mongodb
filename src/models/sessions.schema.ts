import { timeStamp } from "console";
import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Register",
        required: true,
    },
    status:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type: Date,
        default: Date.now()
    }
});

const Session = mongoose.model('Session',SessionSchema);

export {Session};