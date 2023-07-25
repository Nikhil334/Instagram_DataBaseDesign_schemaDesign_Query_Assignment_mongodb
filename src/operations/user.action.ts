import { Action, Like, Comment, Share, Reply } from "../models/user.postaction.schema";


const createAction = async (postId: any, userId: any) => {

    const action = new Action({
        post: postId,
    })
    const comment = new Comment({ user: userId, content: 'Nice' });
    action.comments.push(comment);
    const like = new Like({
        user: userId
    });
    action.likes.push(like);
    const share = new Share({
        user: userId
    });
    action.shares.push(share);
    const reply = new Reply({
        user: userId,
        content: 'good'
    })

    const x = 1;
    const action_save = await action.save();
    // if (x == 1) {
    const comment_save = await comment.save();
    // }
    // else {
    comment.comments.push(reply);
    const like_save = await like.save();
    const share_save = await share.save();
    const reply_save = await reply.save();
    // }
    console.log('Comment added successfully')
}
export { createAction };