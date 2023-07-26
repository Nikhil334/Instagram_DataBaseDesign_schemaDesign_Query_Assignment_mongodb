import express from 'express';
import { registerControl, loginControl } from '../controllers/user.controller';
import { checkRegisterData, checkLogindata } from '../middleware/user.datavalidation';
import { maintain_session_control } from '../controllers/user.sessioncontroller';
import { logoutcontrol } from '../controllers/user.controller';
import { authenticateToken } from '../middleware/user.authorization';
const userRoute = express.Router();


userRoute.route('/').get();
userRoute.route('/signup').post(checkRegisterData, registerControl);
userRoute.route('/login').post(checkLogindata, loginControl);
userRoute.route("/session").post(authenticateToken, maintain_session_control);
userRoute.route("/logout").post(authenticateToken, logoutcontrol);

export default userRoute;
