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
class GetShowUC {
    constructor(ShowGateway) {
        this.ShowGateway = ShowGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const show = yield this.ShowGateway.getShowsByDay(input.weekDate);
            if (!show) {
                throw new Error("Band not found");
            }
            return {
                shows: show.map(show => {
                    return {
                        weekDate: show.getWeekDate(),
                        startTime: show.getStartTime(),
                        endTime: show.getEndTime(),
                        bandId: show.getBandId(),
                    };
                })
            };
        });
    }
}
exports.GetShowUC = GetShowUC;
