"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mission_1 = require("./Mission");
class MobileMission extends Mission_1.Mission {
    constructor(startDate, endDate, listTeachers, listStudents, classNumber) {
        super(startDate, endDate, listTeachers, listStudents);
        this.classNumber = classNumber;
    }
}
exports.MobileMission = MobileMission;
