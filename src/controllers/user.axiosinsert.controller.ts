
import { insertdatabyaxios } from "../services/user.axiosinsertservice";
import { axioslogin } from "../services/user.axiosinsertservice";
import { axiosphotodisplay } from "../services/user.axiosinsertservice";
import { Request, Response } from "express";


const insertdatacontroller = async (req: Request, res: Response) => {
    try {
        const result = await insertdatabyaxios(req);
        res.json(result.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const axioslogincontroller = async (req: Request, res: Response) => {
    try {
        const result = await axioslogin(req);
        res.json(result.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const axiosphotocontroller = async (req: Request, res: Response) => {
    try {
        const result = await axiosphotodisplay(req);
        res.json(result.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export { insertdatacontroller, axioslogincontroller,axiosphotocontroller };
