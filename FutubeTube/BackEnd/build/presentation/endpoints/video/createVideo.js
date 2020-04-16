"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createVideo_1 = require("../../../business/usecase/video/createVideo");
const videoDataBase_1 = require("../../../data/videoDataBase");
const jwtAuthorizer_1 = require("../../../services/jwtAuthorizer");
exports.createVideoEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createVideoUC = new createVideo_1.CreateVideoUC(new videoDataBase_1.VideoDB(), new jwtAuthorizer_1.JwtAuthorizer());
        const auth = req.headers.Authorization || req.headers.authorization;
        const result = yield createVideoUC.execute({
            title: req.body.title,
            link: req.body.link,
            description: req.body.description,
            token: auth,
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send(Object.assign({ message: err.message }, err));
    }
});