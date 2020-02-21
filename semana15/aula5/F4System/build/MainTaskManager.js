"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
class MainTaskManager {
    execute() {
    }
}
exports.MainTaskManager = MainTaskManager;
const patricia = new Student_1.Student("patricia", "paty", 1986);
console.log(patricia.getName());
