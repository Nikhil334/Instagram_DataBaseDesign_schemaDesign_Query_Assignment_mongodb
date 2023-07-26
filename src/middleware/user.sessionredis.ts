import { createClient } from "redis";


const client = createClient();
const maintain_session_redis = async (user: any) => {

    await client.connect();
    client.on('error', err => console.log('Redis client error', err));
    try {
        await client.SET(user.username, JSON.stringify({
            'user_id': user._id,
            'status': true
        }));
        const session = await client.get(user.username);
        console.log(session);
    }
    catch (err) {
        console.log(err);
    }
}
const distroySession = async (user:any) => {
    try {
        console.log(user);
        await client.SET(user.username, JSON.stringify({
            'user_id': user.user_id,
            'status': false
        }));
    }
    catch (err) {
        console.log(err);
    }
}
export { maintain_session_redis, distroySession };