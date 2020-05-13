"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name, email, birthday, image, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.image = image;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getBirthday() {
        return this.birthday;
    }
    setBirthday(birthday) {
        this.birthday = birthday;
    }
    getImage() {
        return this.image;
    }
    setImage(image) {
        this.image = image;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
}
exports.User = User;
