import { Register } from "../models/user.schema";
import { Request, Response } from "express";
import { maintain_session_control } from "../controllers/user.sessioncontroller";
import { Session } from "../models/sessions.schema";
import jwt from "jsonwebtoken";
import { distroySession } from "../middleware/user.sessionredis";

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


const loginUsers = async (req: Request, res: Response) => {
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
        const token = jwt.sign({ email: user.email, user_id: user._id, username: user.username }, process.env.secretKey, { expiresIn: '1h' });
        console.log(token);
        await maintain_session_control(user, token);
        return true;
      }
    }
  }
  catch (err) {
    return false;
  }
}
const logoutservice = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const isUser = await Register.find({ email: user.email });
    console.log(isUser)
    if (isUser) {
      const id = isUser[0]._id;
      const isSession = await Session.find({ user_id: id });
      if (isSession) {
        if (isSession[0].status) {
          await Session.findOneAndUpdate({ _id: isSession[0]._id }, { status: !isSession[0].status });
          await distroySession(isUser[0]);
          return true;
        }
        else {
          return false;
        }
      }
      else {
        res.status(404).json({ message: "Session not found" });
      }
    }
    else {
      res.status(404).json({ message: "User not found" });
    }
  }
  catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
}


export { registerUsers, loginUsers, logoutservice };