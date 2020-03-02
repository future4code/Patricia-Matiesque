"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mission_1 = require("./Mission");
class WebMission extends Mission_1.Mission {
    constructor(startDate, endDate, listTeachers, listStudents, patrono) {
        super(startDate, endDate, listTeachers, listStudents);
        this.patrono = patrono;
    }
}
exports.WebMission = WebMission;
