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
const createBand_1 = require("../../../business/usecase/band/createBand");
const bandDatabase_1 = require("../../../data/bandDatabase");
exports.createBandEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createBandUc = new createBand_1.CreateBandUC(new bandDatabase_1.BandDatabase());
        const result = yield createBandUc.execute({
            name: req.body.name,
            musicGenre: req.body.musicGenre,
            responsible: req.body.responsible,
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send(Object.assign({ message: err.message }, err));
    }
});
