"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Video {
    constructor(id, title, link, description, createDate, userId) {
        this.id = id;
        this.title = title;
        this.link = link;
        this.description = description;
        this.createDate = createDate;
        this.userId = userId;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getLink() {
        return this.link;
    }
    setLink(link) {
        this.link = link;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    getCreateDate() {
        return this.createDate;
    }
    setCreateDate(createDate) {
        this.createDate = createDate;
    }
    getUserId() {
        return this.userId;
    }
    setUserId(userId) {
        this.userId = userId;
    }
}
exports.Video = Video;
