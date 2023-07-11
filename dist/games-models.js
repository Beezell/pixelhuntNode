"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const streamsSchema = new mongoose_1.default.Schema({
    streamer: String,
    title: String,
    language: String,
    viewerCount: Number,
});
const ViewerHistorySchema = new mongoose_1.default.Schema({
    date: Date,
    viewers: Number,
});
const gameSchema = new mongoose_1.default.Schema({
    _id: String,
    name: String,
    firstDayInTop: Date,
    viewersDay: Number,
    igdbId: String,
    cover: String,
    firstReleaseDate: Date,
    genres: [],
    summary: String,
    platforms: [],
    involvedCompanies: [],
    streams: [streamsSchema],
    viewerHistory: [ViewerHistorySchema],
});
const gameModel = mongoose_1.default.model("Game", gameSchema);
exports.default = gameModel;
