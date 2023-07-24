import { registerUsers, loginUsers, logoutservice } from "../services/user.register.services";
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
    const result = await logoutservice(req,res)
  }
  catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
}


export { registerControl, loginControl, logoutcontrol };