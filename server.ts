import express from "express";
import dotenv from 'dotenv';
import {dbConnection} from "./src/config/conn";
import {createUsers} from "./src/operations/user.creation";
import {createAction} from './src/operations/user.action';
import {createPost} from './src/operations/user.post';
import {createfriend} from './src/operations/friend';
import {createfav} from './src/operations/favourite';
import {createSession} from  './src/operations/session'

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;

dbConnection();
//createUsers();
//createAction('64b5a4dc4855d8d9b091a9b1','64b58b216a27b5f17d0a8010')
createPost('64b58b216a27b5f17d0a8010');
//createfriend('64b5a4dc4855d8d9b091a9b1','64b58b216a27b5f17d0a8010')
//createfav('64b58b216a27b5f17d0a8010','64b5a4dc4855d8d9b091a9b1');
//createSession('64b5a4dc4855d8d9b091a9b1');

app.listen(port,()=>{
    console.log(`i am listening at port no. ${port}`);
})