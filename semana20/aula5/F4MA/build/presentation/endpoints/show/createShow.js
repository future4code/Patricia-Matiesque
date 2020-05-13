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
const createShow_1 = require("../../../business/usecase/show/createShow");
const showDatabase_1 = require("../../../data/showDatabase");
exports.createShowEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createShowUc = new createShow_1.CreateShowUC(new showDatabase_1.ShowDatabase());
        const result = yield createShowUc.execute({
            weekDate: req.body.weekDate,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            bandId: req.body.bandId,
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send(Object.assign({ message: err.message }, err));
    }
});
