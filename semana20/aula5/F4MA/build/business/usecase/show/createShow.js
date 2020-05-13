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
const uuid_1 = require("uuid");
const show_1 = require("../../entities/show");
class CreateShowUC {
    constructor(showGateway) {
        this.showGateway = showGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = uuid_1.v4();
            if (input.startTime < 8) {
                throw new Error("marcar apos as 8");
            }
            if (input.endTime > 23) {
                throw new Error("marcar antes das 23");
            }
            const getShow = yield this.showGateway.getShowWithBandByTimeRange(input.startTime, input.endTime, input.weekDate);
            if (getShow.length > 0) {
                throw new Error("horario fora");
            }
            const show = new show_1.Show(id, input.weekDate, input.startTime, input.endTime, input.bandId);
            yield this.showGateway.createShow(show);
            return {
                message: "Successfully Created"
            };
        });
    }
}
exports.CreateShowUC = CreateShowUC;
