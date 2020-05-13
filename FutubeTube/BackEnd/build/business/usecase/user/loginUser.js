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
class LoginUserUC {
    constructor(userGateway, authenticationGateway, cryptographyGateway) {
        this.userGateway = userGateway;
        this.authenticationGateway = authenticationGateway;
        this.cryptographyGateway = cryptographyGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userGateway.loginUser(input.email);
            if (!user) {
                throw new Error("Incorrect Password or Email");
            }
            if (!(yield this.cryptographyGateway.compare(input.password, user.getPassword()))) {
                throw new Error("Incorrect Password or Email");
            }
            const token = this.authenticationGateway.generateToken({
                id: user.getId()
            });
            return token;
        });
    }
}
exports.LoginUserUC = LoginUserUC;
