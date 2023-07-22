"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("./src/routes/user.routes"));
const user_post_routes_1 = __importDefault(require("./src/routes/user.post.routes"));
const user_friends_routes_1 = __importDefault(require("./src/routes/user.friends.routes"));
const conn_1 = require("./src/config/conn");
const user_comment_routes_1 = __importDefault(require("./src/routes/user.comment.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 3001;
(0, conn_1.dbConnection)();
app.use('/', user_routes_1.default);
app.use('/', user_post_routes_1.default);
app.use('/', user_friends_routes_1.default);
app.use('/', user_comment_routes_1.default);
app.use('/post/', user_post_routes_1.default);
app.use('/friends', user_friends_routes_1.default);
app.use('/comments', user_comment_routes_1.default);
app.listen(port, () => {
    console.log(`i am listening at port no. ${port}`);
});
//# sourceMappingURL=server.js.map