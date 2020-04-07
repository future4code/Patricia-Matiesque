"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Band {
    constructor(id, name, musicGenre, responsible) {
        this.id = id;
        this.name = name;
        this.musicGenre = musicGenre;
        this.responsible = responsible;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getMusicGenre() {
        return this.musicGenre;
    }
    getResponsible() {
        return this.responsible;
    }
}
exports.Band = Band;
