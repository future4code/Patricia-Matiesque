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
const userDataBase_1 = require("../../../data/userDataBase");
const jwtAuthorizer_1 = require("../../../services/jwtAuthorizer");
const bcryptService_1 = require("../../../services/bcryptService");
const createUser_1 = require("../../../business/usecase/user/createUser");
exports.createUserEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createUserUC = new createUser_1.CreateUserUC(new userDataBase_1.UserDB(), new jwtAuthorizer_1.JwtAuthorizer(), new bcryptService_1.BcryptService());
        const result = yield createUserUC.execute({
            name: req.body.name,
            email: req.body.email,
            birthday: req.body.birthday,
            image: req.body.photo,
            password: req.body.password,
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send(Object.assign({ message: err.message }, err));
    }
});
