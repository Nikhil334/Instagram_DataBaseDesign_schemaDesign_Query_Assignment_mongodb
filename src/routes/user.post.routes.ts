import express from 'express';
// import showallPost from '../services/user.post.service';
import { authenticateToken } from '../middleware/user.authorization';
import { checkpostmiddleware } from '../middleware/user.datavalidation';
import { createpostControl, showallPostControl,postControl } from '../controllers/user.post.controller';
const postRoute = express.Router();


postRoute.route('/').get();
postRoute.route('/create').post(authenticateToken, checkpostmiddleware, createpostControl);
postRoute.route('/userpost').get(authenticateToken,postControl);
postRoute.route('/allposts').get(authenticateToken, showallPostControl);


export default postRoute;
