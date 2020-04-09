import express, { Request, Response } from "express";
import { createUserEndpoint } from "./presentation/endpoints/user/createUser";
import { loginUserEndpoint } from "./presentation/endpoints/user/loginUser";


const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post("/user/create", createUserEndpoint);
app.post("/user/login", loginUserEndpoint);


export default app;
