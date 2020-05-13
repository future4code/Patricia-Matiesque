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
const baseDatabase_1 = require("./baseDatabase");
const user_1 = require("../business/entities/user");
const DuplicateUserError_1 = require("../business/error/DuplicateUserError");
class UserDB extends baseDatabase_1.BaseDB {
    constructor() {
        super(...arguments);
        this.userTableName = "Users";
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection
                    .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    birthday: user.getBirthday(),
                    image: user.getImage(),
                    password: user.getPassword(),
                })
                    .into(this.userTableName);
            }
            catch (err) {
                console.log(err);
                if (err.code === 'ER_DUP_ENTRY') {
                    throw new DuplicateUserError_1.DuplicateUserError();
                }
                else {
                    throw err;
                }
            }
        });
    }
    loginUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.connection
                .select("*")
                .from(this.userTableName)
                .where({ email: email });
            if (!user[0]) {
                return undefined;
            }
            return new user_1.User(user[0].id, user[0].name, user[0].email, user[0].birthday, user[0].image, user[0].password);
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
          SELECT * FROM ${this.userTableName} 
          WHERE id = '${id}'
        `);
            if (!result[0][0]) {
                return undefined;
            }
            return new user_1.User(result[0][0].id, result[0][0].name, result[0][0].email, result[0][0].birthday, result[0][0].image, result[0][0].password);
        });
    }
    updatePassword(password, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
        UPDATE ${this.userTableName} 
        SET password = '${password}'
        WHERE id = '${id}';
      `);
        });
    }
}
exports.UserDB = UserDB;
