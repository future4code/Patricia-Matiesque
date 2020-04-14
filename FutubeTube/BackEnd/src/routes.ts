import express, { Request, Response } from "express";
import { createUserEndpoint } from "./presentation/endpoints/user/createUser";
import { loginUserEndpoint } from "./presentation/endpoints/user/loginUser";
import { updatePasswordEndpoint } from "./presentation/endpoints/user/updatePassword";
import { createVideoEndpoint } from "./presentation/endpoints/video/createVideo";


const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post("/user/create", createUserEndpoint);
app.post("/user/login", loginUserEndpoint);
app.post("/user/password", updatePasswordEndpoint);

app.post("/video/create", createVideoEndpoint);

export default app;
