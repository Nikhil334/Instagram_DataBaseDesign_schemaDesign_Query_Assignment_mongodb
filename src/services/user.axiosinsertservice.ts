
import axios from "axios";
import { Request, Response } from "express";

const insertdatabyaxios = async (req: Request) => {
try {
const response = await axios.post('http://localhost:5003/signup', req.body);
return response;
} catch (error) {
console.error(error);
return error;
}
}

const axioslogin = async (req: Request) => {
try {
const response = await axios.post('http://localhost:5003/login', req.body);
return response;
}
catch (error) {
console.error(error);
return error;
}
}

const axiosphotodisplay = async (req:Request)=>{
try{
const response = await axios.post('http://localhost:5003/recentcomment', req.body);
return response;
}
catch (error) {
console.error(error);
return error;
}
}
export { insertdatabyaxios ,axioslogin,axiosphotodisplay};

