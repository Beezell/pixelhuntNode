"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const GameSteamSchema = new mongoose_1.default.Schema({
    idGame: String,
    name: String,
    appid: String,
    type: String,
    requiredAge: Number,
    isFree: Boolean,
    supportedLanguage: String,
    headerImage: String,
    aboutTheGame: String,
    developers: [],
    publishers: [],
    genres: [],
    categories: [],
    price: String,
});
const GameSteamModel = mongoose_1.default.model("SteamGame", GameSteamSchema);
exports.default = GameSteamModel;
