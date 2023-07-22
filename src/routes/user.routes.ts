import express from 'express';
import { registerControl, loginControl } from '../controllers/user.register.controller';
import { registerUserMiddleware, loginUserMiddleware } from '../middleware/user.datavalidation';
const userRoute = express.Router();


userRoute.route('/').get();
userRoute.route('/signup').post(registerUserMiddleware, registerControl);
userRoute.route('/login').post(loginUserMiddleware, loginControl);

export default userRoute;
