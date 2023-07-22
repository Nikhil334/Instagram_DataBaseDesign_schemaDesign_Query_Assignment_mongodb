import express from 'express';
import { requestforcontrol,requestacceptedcontrol, whoFollowMeController,whoFollowingMeController } from '../controllers/user.friends.controller';
import { authenticateToken } from '../middleware/user.authorization';
const friendRoute = express.Router();


friendRoute.route('/').get();
friendRoute.route('/request').post(authenticateToken,requestforcontrol);
friendRoute.route('/accepting').post(authenticateToken,requestacceptedcontrol);
friendRoute.route('/followers').get(authenticateToken,whoFollowMeController);
friendRoute.route('/following').get(authenticateToken,whoFollowingMeController);


export default friendRoute;