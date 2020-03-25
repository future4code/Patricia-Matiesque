import express, { Request, Response } from "express";
import { createUserEndpoint } from "./endpoints/users/createUser";
import { loginUserEndpoint } from "./endpoints/users/loginUser";
import { followUserEndpoint } from "./endpoints/users/followUser";
import { deleteFriendEndpoint } from "./endpoints/users/deleteFriend";
import { createPostEndpoint } from "./endpoints/post/createPost";


const app = express();
app.use(express.json());


app.post("/createUser", createUserEndpoint);
app.post("/login", loginUserEndpoint);
app.post("/user/follow", followUserEndpoint);
app.delete("/delete/friend", deleteFriendEndpoint);


app.post("/createPost", createPostEndpoint);


export default app;
