import express, { Request, Response } from "express";
import { createUserEndpoint } from "./Presentation/endpoints/user/createUser";
import { loginUserEndpoint } from "./Presentation/endpoints/user/loginUser";


const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post("/user/create", createUserEndpoint);
app.post("/user/login", loginUserEndpoint);


export default app;
