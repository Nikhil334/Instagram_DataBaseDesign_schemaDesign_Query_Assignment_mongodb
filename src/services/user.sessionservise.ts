import { maintain_session_redis } from "../middleware/user.sessionredis";
import { Session } from "../models/sessions.schema";

const maintain_session_service = async (user: any, token: any) => {
    try {
        const isSession = await Session.find({ user_id: user._id })
        console.log(isSession);
        if (!isSession.length) {
            const session_details = new Session({
                user_id: user.id,
                status: true
            });
            const session = await session_details.save();
            console.log("Session stored successfully");
            console.log(session);
        }
        else if (isSession.length) {
            if (!isSession[0].status) {
                await Session.findOneAndUpdate({ user_id: user._id }, { status: !isSession[0].status });
                console.log("Session Activate");
            }
        }
        await maintain_session_redis(user);
    }
    catch (err) {
        console.log("Server Error")
    }
}

export { maintain_session_service }    