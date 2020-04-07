"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createband_1 = require("./endpoints/band/createband");
const getBand_1 = require("./endpoints/band/getBand");
const createShow_1 = require("./endpoints/show/createShow");
const getShow_1 = require("./endpoints/show/getShow");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
app.post("/createband", createband_1.createBandEndpoint);
app.get("/getband", getBand_1.getBandEndpoint);
app.post("/createshow", createShow_1.createShowEndpoint);
app.get("/getshow", getShow_1.getShowEndpoint);
exports.default = app;
