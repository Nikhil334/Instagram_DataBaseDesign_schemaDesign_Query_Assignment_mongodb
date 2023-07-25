import { requestforfriend, requestacceptfriend, showfriendsWhoFollowMe,showfriendsWhoFollowingMe } from "../services/user.friends.service";
import { Request, Response } from "express";


const requestforcontrol = async (req: Request, res: Response) => {
    try {
        const result = await requestforfriend(req);
        if (result) {
            res.status(201).send(result);
        }
        else {
            res.status(500).send("Internal server error");
        }

    } catch (errr) {
        res.status(500).send("Internal server errror");
    }
}


const requestacceptedcontrol = async (req: Request, res: Response) => {
    try {
        const result = await requestacceptfriend(req);
        if (result) {
            res.status(201).send(result);
        }
        else {
            res.status(500).send("Internal server error");
        }

    } catch (errr) {
        res.status(500).send("Internal server errror");
    }
}

const whoFollowMeController = async (req: Request, res: Response) => {
    try {
        const data = await showfriendsWhoFollowMe(req);
        if (data.length==0) {
            res.status(404).send("no data found");
        }
        res.status(200).send(data);
    }
    catch (err) {
        res.status(500).send("Internal server error");
    }
}

const whoFollowingMeController = async (req: Request, res: Response) => {
    try {
        const data = await showfriendsWhoFollowingMe(req);
        if (data.length==0) {
            res.status(404).send("no data found");
        }
        res.status(200).send(data);
    }
    catch (err) {
        res.status(500).send("Internal server error");
    }
}


export { requestforcontrol, requestacceptedcontrol, whoFollowMeController,whoFollowingMeController };