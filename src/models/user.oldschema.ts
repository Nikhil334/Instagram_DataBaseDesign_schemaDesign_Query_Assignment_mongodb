import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    profilePicture: String,
    no_of_posts: {
        type: Number,
        default: 0
    },
    no_of_followers: {
        type: Number,
        default: 0
    },
    no_of_followings: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model('User', UserSchema);
export { User };