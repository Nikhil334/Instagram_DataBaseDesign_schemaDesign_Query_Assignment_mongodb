import mongoose, { Schema } from 'mongoose';



const ReplySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Register',
        Required:true

    },
    comment:{
        type: Schema.Types.ObjectId,
        ref:'Comment',
        required:true
    },
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Register',
        required : true
    },
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments:[ReplySchema]
});



const LikeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Register',
        Required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ShareSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Register',
        Required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ActionSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        Required : true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Register',
        Required : true
    },
    comments: [CommentSchema],
    likes: [LikeSchema],
    shares: [ShareSchema]
});

const Action = mongoose.model('Action', ActionSchema);
const Comment = mongoose.model('Comment', CommentSchema);
const Like = mongoose.model('Like', LikeSchema);
const Share = mongoose.model('Share', ShareSchema);
const Reply=mongoose.model('Reply',ReplySchema);
export { Action, Comment, Like, Share ,Reply};