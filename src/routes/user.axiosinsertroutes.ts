
import express from 'express';
import { insertdatacontroller,axioslogincontroller,axiosphotocontroller } from '../controllers/user.axiosinsert.controller';
const axiosRoute = express.Router();


axiosRoute.route('/').get();
axiosRoute.route('/insertdatabyaxios').post(insertdatacontroller);
axiosRoute.route('/axioslogin').post(axioslogincontroller);
axiosRoute.route('/axiosphotodisplay').post(axiosphotocontroller);

export default axiosRoute;
