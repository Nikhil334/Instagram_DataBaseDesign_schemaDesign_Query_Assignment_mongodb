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
//import swaggerJSDoc = require("swagger-jsdoc");
const swaggerdefinition_1 = require("./src/swaggerdocs/swaggerdefinition");
const user_axiosinsertroutes_1 = __importDefault(require("./src/routes/user.axiosinsertroutes"));
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
//const swaggerJsDocs_user:any  =  YAML.load("./src/swaggerdocs/user.servicedoc.yaml");
const port = process.env.PORT || 3001;
const options = {
    swaggerDefinition: swaggerdefinition_1.swaggerDefinition,
    swaggerOptions: {
        authAction: { JWT: { name: "JWT", schema: { type: "apiKey", in: "header", name: "Authorization", description: "" }, value: "<JWT>" } }
    },
    apis: ['./src/swaggerdocs/*'],
};
const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
(0, conn_1.dbConnection)();
app.use('/', user_routes_1.default);
app.use('/', user_post_routes_1.default);
app.use('/', user_friends_routes_1.default);
app.use('/', user_comment_routes_1.default);
app.use('/', user_axiosinsertroutes_1.default);
app.use('/post/', user_post_routes_1.default);
app.use('/friends', user_friends_routes_1.default);
app.use('/comments', user_comment_routes_1.default);
app.listen(port, () => {
    console.log(`i am listening at port no. ${port}`);
});
//# sourceMappingURL=server.js.map