"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Show {
    constructor(id, weekDate, startTime, endTime, bandId) {
        this.id = id;
        this.weekDate = weekDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.bandId = bandId;
    }
    getId() {
        return this.id;
    }
    getWeekDate() {
        return this.weekDate;
    }
    getStartTime() {
        return this.startTime;
    }
    getEndTime() {
        return this.endTime;
    }
    getBandId() {
        return this.bandId;
    }
}
exports.Show = Show;
class ShowWithBand extends Show {
    constructor(id, weekDate, startTime, endTime, band) {
        super(id, weekDate, startTime, endTime, band.getId());
        this.band = band;
    }
    getBand() {
        return this.band;
    }
}
exports.ShowWithBand = ShowWithBand;
var ShowWeekDay;
(function (ShowWeekDay) {
    ShowWeekDay["FRIDAY"] = "FRIDAY";
    ShowWeekDay["SATURDAY"] = "SATURDAY";
    ShowWeekDay["SUNDAY"] = "SUNDAY";
})(ShowWeekDay = exports.ShowWeekDay || (exports.ShowWeekDay = {}));
exports.toShowWeekDay = (input) => {
    switch (input.toUpperCase()) {
        case "FRIDAY":
            return ShowWeekDay.FRIDAY;
        case "SATURDAY":
            return ShowWeekDay.SATURDAY;
        case "SUNDAY":
            return ShowWeekDay.SUNDAY;
        default:
            throw new Error("Invalid Week Day");
    }
};
