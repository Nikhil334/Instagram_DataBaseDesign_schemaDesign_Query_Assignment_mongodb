import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
dotenv.config();


const key = process.env.secretKey;


const verify_token= async(token)=>{
        // const token = req.headers.authorization;
        //console.log(token);
        if (token) {
            const decoded = jwt.verify(token, key);
            return decoded;
        }
        else{
            return {error:"error"};
        }
}

export {verify_token}; 