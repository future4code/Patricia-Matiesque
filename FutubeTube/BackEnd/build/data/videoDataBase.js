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
const DuplicateUserError_1 = require("../business/error/DuplicateUserError");
const feedVideos_1 = require("../business/entities/feedVideos");
class VideoDB extends baseDatabase_1.BaseDB {
    constructor() {
        super(...arguments);
        this.userTableName = "Users";
        this.videoTableName = "Videos";
    }
    createVideo(video) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection
                    .insert({
                    id: video.getId(),
                    title: video.getTitle(),
                    link: video.getLink(),
                    description: video.getDescription(),
                    createDate: video.getCreateDate(),
                    userId: video.getUserId(),
                })
                    .into(this.videoTableName);
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
    getAllVideosUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
        SELECT ${this.videoTableName}.*, ${this.userTableName}.name
        FROM ${this.videoTableName}
        JOIN ${this.userTableName} ON ${this.videoTableName}.userId = ${this.userTableName}.id
        WHERE userId = '${id}'; 
        `);
            console.log("result", result);
            return result[0].map((video) => {
                return new feedVideos_1.FeedVideos(video.id, video.title, video.link, video.description, video.createDate, video.userId, video.name, video.image);
            });
        });
    }
    updateVideo(id, userId, title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            UPDATE ${this.videoTableName}
            SET title = '${title}', description = '${description}'
            WHERE id = '${id}' AND userId = '${userId}'
        `);
        });
    }
    getVideoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
            SELECT v.*, u.name, u.image
            FROM ${this.videoTableName} v
            JOIN ${this.userTableName} u
            ON u.id = v.userId
            WHERE v.id = '${id}'
        `);
            if (!result[0][0]) {
                return undefined;
            }
            ;
            return new feedVideos_1.FeedVideos(result[0][0].id, result[0][0].title, result[0][0].link, result[0][0].description, result[0][0].createDate, result[0][0].userId, result[0][0].name, result[0][0].image);
        });
    }
    deleteVideo(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            DELETE FROM ${this.videoTableName}
            WHERE id = '${id}' AND userId = '${userId}';
        `);
        });
    }
    getFeedVideos() {
        return __awaiter(this, void 0, void 0, function* () {
            const videos = yield this.connection.raw(`
            SELECT v.*, u.name, u.image
            FROM ${this.videoTableName} v
            JOIN ${this.userTableName} u
            ON v.userId = u.id
        `);
            if (!videos[0][0]) {
                return undefined;
            }
            ;
            return yield videos[0].map((video) => {
                return new feedVideos_1.FeedVideos(video.id, video.title, video.link, video.description, video.createDate, video.userId, video.name, video.image);
            });
        });
    }
    ;
}
exports.VideoDB = VideoDB;
