"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseError_1 = require("./baseError");
class MinimumCharacterError extends baseError_1.BaseError {
    constructor() {
        super(400, "Password must be at least 6 characters");
    }
}
exports.MinimumCharacterError = MinimumCharacterError;
