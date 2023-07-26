import { Session } from "../models/sessions.schema";

const createSession = async (userId:any) => {

    const sessiondata = new Session({
        user:userId,
        session_time:'12/07/2002'
    })
    const result = await sessiondata.save();
    console.log(result);
}
export {createSession};