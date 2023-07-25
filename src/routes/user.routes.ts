import express from 'express';
import { registerControl, loginControl } from '../controllers/user.register.controller';
import { registerUserMiddleware, loginUserMiddleware } from '../middleware/user.datavalidation';
import { maintain_session_control } from '../controllers/user.sessioncontroller';
import { logoutcontrol } from '../controllers/user.register.controller';
import { authenticateToken } from '../middleware/user.authorization';
const userRoute = express.Router();


userRoute.route('/').get();
userRoute.route('/signup').post(registerUserMiddleware, registerControl);
userRoute.route('/login').post(loginUserMiddleware, loginControl);
userRoute.route("/session").post(authenticateToken, maintain_session_control);
userRoute.route("/logout").post(authenticateToken, logoutcontrol);

export default userRoute;
