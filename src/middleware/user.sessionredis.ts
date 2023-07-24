import redis from "redis";
import { createClient } from "redis";
import { Request, Response } from "express";
import { Register } from "../models/user.register.schema";

const client = createClient();


const maintain_session_redis = async (req: Request, res: Response) => {

    await client.connect();
    client.on('error', err => console.log('Redis client error', err));
    try {

        const user = req.user;
        const isUser = await Register.find({ email: user.email });
        console.log(isUser);
        if (isUser) {
            await client.SET(isUser[0].username, JSON.stringify({
                'user_id': isUser[0]._id,
                'status': true
            }));
            const session = await client.get(isUser[0].username);
            console.log(session);
        }
        else {
            console.log("User not found");
        }
    }
    catch (err) {
        console.log(err);
    }
}
const distroySession = async (req: Request, res: Response) => {
    try {
        await client.SET(req.user.username, JSON.stringify({
            'user_id': req.user.user_id,
            'status': false
        }));
    }
    catch (err) {
        console.log(err);
    }
}
export { maintain_session_redis,distroySession};