"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
class JwtAuthorizer {
    constructor() {
        this.SECRET_KEY = "PATY";
        this.expiresIn = "10h";
    }
    generateToken(input) {
        const token = jwt.sign({
            id: input.id,
        }, this.SECRET_KEY, {
            expiresIn: this.expiresIn
        });
        return token;
    }
    getUsersInfoFromToken(token) {
        const result = jwt.verify(token, this.SECRET_KEY);
        return {
            id: result.id,
        };
    }
}
exports.JwtAuthorizer = JwtAuthorizer;