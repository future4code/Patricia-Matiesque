"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const videos_1 = require("./videos");
class FeedVideos extends videos_1.Video {
    constructor(id, title, link, description, createDate, userId, name, image) {
        super(id, title, link, description, createDate, userId);
        this.name = name;
        this.image = image;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getImage() {
        return this.image;
    }
    setImage(image) {
        this.image = image;
    }
}
exports.FeedVideos = FeedVideos;
