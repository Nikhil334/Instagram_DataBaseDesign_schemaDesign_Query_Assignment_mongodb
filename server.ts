import express from "express";
import dotenv from 'dotenv';
import userRoute from "./src/routes/user.routes";
import postRoute from "./src/routes/user.post.routes";
import friendRoute from "./src/routes/user.friends.routes";
import {dbConnection} from "./src/config/conn";
import commentRoute from "./src/routes/user.comment.routes";
//import swaggerJSDoc = require("swagger-jsdoc");
import { swaggerDefinition } from "./src/swaggerdocs/swaggerdefinition";
import axiosRoute from "./src/routes/user.axiosinsertroutes";
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
dotenv.config();
const app = express();
app.use(express.json());
//const swaggerJsDocs_user:any  =  YAML.load("./src/swaggerdocs/user.servicedoc.yaml");

const port = process.env.PORT || 3001;
  
  const options = {
    swaggerDefinition,
    swaggerOptions: {
        authAction :{ JWT: {name: "JWT", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "<JWT>"} }
      },
    apis: ['./src/swaggerdocs/*'],
  };
  
const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
dbConnection();

app.use('/',userRoute);
app.use('/',postRoute);
app.use('/',friendRoute);
app.use('/',commentRoute);
app.use('/',axiosRoute);
app.use('/post/',postRoute);
app.use('/friends',friendRoute);
app.use('/comments',commentRoute);


app.listen(port,()=>{
    console.log(`i am listening at port no. ${port}`);
})