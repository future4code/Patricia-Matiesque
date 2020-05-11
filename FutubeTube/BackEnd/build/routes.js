"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createUser_1 = require("./presentation/endpoints/user/createUser");
const loginUser_1 = require("./presentation/endpoints/user/loginUser");
const updatePassword_1 = require("./presentation/endpoints/user/updatePassword");
const createVideo_1 = require("./presentation/endpoints/video/createVideo");
const getAllVideosUserByIdUC_1 = require("./presentation/endpoints/video/getAllVideosUserByIdUC");
const updateVideo_1 = require("./presentation/endpoints/video/updateVideo");
const deleteVideo_1 = require("./presentation/endpoints/video/deleteVideo");
const feedOfVideos_1 = require("./presentation/endpoints/video/feedOfVideos");
const getVideoDetail_1 = require("./presentation/endpoints/video/getVideoDetail");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json()); // Linha mágica (middleware)
app.post("/user/create", createUser_1.createUserEndpoint);
app.post("/user/login", loginUser_1.loginUserEndpoint);
app.post("/user/password", updatePassword_1.updatePasswordEndpoint);
app.post("/video/create", createVideo_1.createVideoEndpoint);
app.get("/video/user", getAllVideosUserByIdUC_1.getAllVideosUserByIdEndpoint);
app.post("/video/update/:id", updateVideo_1.updateVideoEndpoint);
app.delete("/video/delete/:id", deleteVideo_1.deleteVideoEndpoint);
app.get("/feed", feedOfVideos_1.feedOfVideosEndpoint);
app.get("/video/detail/:id", getVideoDetail_1.getVideoDetailEndpoint);
exports.default = app;
