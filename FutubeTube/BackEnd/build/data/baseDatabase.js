"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
class BaseDB {
    constructor() {
        this.connectionData = {
            host: process.env.HOST,
            port: 3306,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        };
        this.connection = knex_1.default({
            client: process.env.CLIENT,
            connection: this.connectionData
        });
    }
}
exports.BaseDB = BaseDB;
