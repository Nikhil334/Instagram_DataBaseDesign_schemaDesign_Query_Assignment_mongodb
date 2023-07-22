import { Register } from "../models/user.register.schema";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

const registerUsers = async (req: Request) => {
    try {
        const salt = parseInt(process.env.SALT);
        const regdata = req.body;
        const encryptPass = await bcrypt.hash(req.body.password, salt);
        const registerdata = new Register({
            username: regdata.username,
            email: regdata.email,
            password: encryptPass
        })
        const result = await registerdata.save();
        console.log(result);
        return result;
    }
    catch (err) {
        return false;
    }
}


const loginUsers = async (req: Request) => {
    try {
        const salt = parseInt(process.env.SALT);
        const regdata = req.body;
        const email = regdata.email;
        const user = await Register.findOne({ email });
        if (!user) {
            return false;
        }
        else {
            const passmatch = await bcrypt.compare(regdata.password, user.password);
            if (!passmatch) {
                return false
            }
            else {
                //console.log("Helooo");
                const token = jwt.sign({ email: user.email, user_id: user._id, username: user.username }, process.env.secretKey, { expiresIn: '12h' });
                console.log(token);
                return true;
            }
        }
    }
    catch (err) {

        return false;
    }
}
export { registerUsers, loginUsers };