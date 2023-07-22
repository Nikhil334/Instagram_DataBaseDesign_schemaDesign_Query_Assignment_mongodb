import express from 'express';
import { ShowCommentController } from '../controllers/user.postcomment.controller';
import { authenticateToken } from '../middleware/user.authorization';
const commentRoute = express.Router();


commentRoute.route('/').get();
commentRoute.route('/showcomment').post(authenticateToken,ShowCommentController);

export default commentRoute;