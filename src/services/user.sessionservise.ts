import { Request, Response } from "express";
import { maintain_session_redis } from "../middleware/user.sessionredis";
import { verify_token } from "../middleware/user.verifytoken";
import { Register } from "../models/user.register.schema";
import { Session } from "../models/sessions.schema";


declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

const maintain_session_service = async (req: Request, res: Response, token: any) => {
    try {
        const check_user = await verify_token(token);

        req.user = check_user;
        const isUser = await Register.find({ email: req.user.email });
        //console.log(isUser);
        if (isUser) {
            const user = isUser[0]._id;
            const isSession = await Session.find({ user_id: user })
            console.log(isSession);
            if (!isSession.length) {
                const session_details = new Session({
                    user_id: user,
                    status: true
                });
                const session = await session_details.save();
                console.log("Session stored successfully");
                console.log(session);
            }
            else if (isSession.length) {
                if (!isSession[0].status) {
                    await Session.findOneAndUpdate({ user_id: user }, { status: !isSession[0].status });
                    console.log("Session Activate");
                }
            }
            // console.log("One session of this user is already activ");
            // res.status(201).json({message: "Session stored successfully"});
            await maintain_session_redis(req, res);
        }
        else {
            // res.status(404).json({message: "User Not Found"});
            console.log("User not found");
        }
    }
    catch (err) {
        // res.status(500).json({message: "Server Error", err});
        console.log("Server Error")
    }
}

export { maintain_session_service }    