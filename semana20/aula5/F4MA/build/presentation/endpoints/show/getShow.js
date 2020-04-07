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
const getShows_1 = require("../../../business/usecase/show/getShows");
const showDatabase_1 = require("../../../data/showDatabase");
exports.getShowEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getShowUC = new getShows_1.GetShowUC(new showDatabase_1.ShowDatabase());
        const result = yield getShowUC.execute({
            weekDate: req.query.day,
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send(Object.assign({ message: err.message }, err));
    }
});
