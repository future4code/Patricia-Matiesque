"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
class BaseDatabase {
    constructor() {
        this.connectionData = {
            host: "ec2-54-86-100-27.compute-1.amazonaws.com",
            port: 3306,
            user: "patricia",
            password: "paty",
            database: "semana20"
        };
        this.connection = knex_1.default({
            client: "mysql",
            connection: this.connectionData
        });
    }
}
exports.BaseDatabase = BaseDatabase;
