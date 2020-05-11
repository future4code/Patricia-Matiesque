"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseError_1 = require("./baseError");
class DuplicateUserError extends baseError_1.BaseError {
    constructor() {
        super(1062, "Usuario já existe");
    }
}
exports.DuplicateUserError = DuplicateUserError;
