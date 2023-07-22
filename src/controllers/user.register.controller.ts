import { registerUsers, loginUsers } from "../services/user.register.services";
import { Request, Response } from "express";

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
    const result: boolean = await loginUsers(req);
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


export { registerControl, loginControl };