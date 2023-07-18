"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var conn_1 = require("./src/config/conn");
var friend_1 = require("./src/operations/friend");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
var port = process.env.PORT;
(0, conn_1.dbConnection)();
//createUsers();
//createAction('64b5a4dc4855d8d9b091a9b1','64b58b216a27b5f17d0a8010')
//createPost();
(0, friend_1.createfriend)('64b5a4dc4855d8d9b091a9b1', '64b58b216a27b5f17d0a8010');
app.listen(port, function () {
    console.log("i am listening at port no. ".concat(port));
});
