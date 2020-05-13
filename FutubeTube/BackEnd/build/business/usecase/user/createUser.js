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
const uuid_1 = require("uuid");
const MinimumCharacterError_1 = require("../../error/MinimumCharacterError");
const user_1 = require("../../entities/user");
class CreateUserUC {
    constructor(userGateway, authenticationGateway, cryptographyGateway) {
        this.userGateway = userGateway;
        this.authenticationGateway = authenticationGateway;
        this.cryptographyGateway = cryptographyGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = uuid_1.v4();
            const pass = yield this.cryptographyGateway.encrypt(input.password);
            const user = new user_1.User(id, input.name, input.email, input.birthday, input.image, pass);
            if (input.password.length < 6) {
                throw new MinimumCharacterError_1.MinimumCharacterError();
            }
            yield this.userGateway.createUser(user);
            const token = this.authenticationGateway.generateToken({
                id: user.getId()
            });
            return {
                message: "User created successfully " + token
            };
        });
    }
}
exports.CreateUserUC = CreateUserUC;
