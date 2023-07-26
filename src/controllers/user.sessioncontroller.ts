import { Request, Response } from "express";
import { maintain_session_service } from "../services/user.sessionservise";



const maintain_session_control = async (user:any,token: any) => {
    try {
          const result = await maintain_session_service(user,token);
        }
    catch (err) {
        // res.status(500).json({message: "Server Error", err});
        console.log("Server Error")
    }
}

export { maintain_session_control }    