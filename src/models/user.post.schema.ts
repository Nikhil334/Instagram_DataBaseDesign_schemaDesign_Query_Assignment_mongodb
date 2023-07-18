const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
  content: {
    type:String,
    Required:true,
  },
  caption:String,
  no_of_likes:{
    type:Number,
    default:0
},
  no_of_coments:{
    type:Number,
    default:0
  },
  user: { 
    type: Schema.Types.ObjectId,
     ref: 'User',
     Required:true
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

const Post = mongoose.model('Post', PostSchema);
export {Post};