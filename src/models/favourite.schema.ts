import mongoose, { Schema } from "mongoose";

const FavSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Register',
        Required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        Required: true
    }
});

const Favourite = mongoose.model('Favourite', FavSchema);
export { Favourite };