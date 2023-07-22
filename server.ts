import express from "express";
import dotenv from 'dotenv';
import userRoute from "./src/routes/user.routes";
import postRoute from "./src/routes/user.post.routes";
import friendRoute from "./src/routes/user.friends.routes";
import {dbConnection} from "./src/config/conn";
import commentRoute from "./src/routes/user.comment.routes";

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;

dbConnection();

app.use('/',userRoute);
app.use('/',postRoute);
app.use('/',friendRoute);
app.use('/',commentRoute);
app.use('/post/',postRoute);
app.use('/friends',friendRoute);
app.use('/comments',commentRoute);


app.listen(port,()=>{
    console.log(`i am listening at port no. ${port}`);
})