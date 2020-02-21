"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name, email, birthDate) {
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
    }
    getName() {
        return this.name;
    }
}
exports.Student = Student;
