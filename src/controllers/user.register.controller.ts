import { registerUsers, loginUsers } from "../services/user.register.services";
import { Request, Response } from "express";
import { Register } from "../models/user.register.schema";
import { maintain_session_redis } from "../middleware/user.sessionredis";
import { Session } from "../models/sessions.schema";

const registerControl = async (req: Request, res: Response) => {
  try {
    const result: any = await registerUsers(req);
    if (!result) {
      res.status(406).send("Data values are not valid");
    }
    else {
      res.status(201).send(result);
    }
  }
  catch (err) {
    res.status(500).send(err);
  }
}


const loginControl = async (req: Request, res: Response) => {
  try {
    const result: boolean = await loginUsers(req, res);
    // const result:boolean = true

    if (!result) {
      res.status(406).send({
        Login: result
      });
    }
    else {
      res.status(201).send({
        Login: result
      });
    }
  }
  catch (err) {
    res.status(500).send(err);
  }
}



const logoutcontrol = async (req: Request, res: Response) => {
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
          res.status(201).json({ message: "User logOut Successfully" });
        }
        else {
          res.status(404).json({ message: "User is already inactiv" })
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


export { registerControl, loginControl, logoutcontrol };