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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const games_models_1 = __importDefault(require("./games-models"));
const games_steam_models_1 = __importDefault(require("./games-steam-models"));
const router = express_1.default.Router();
router.get("/games", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donnees = yield games_models_1.default.find({});
        res.json(donnees);
    }
    catch (error) {
        console.error("Erreur lors de la récupération des données : ", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}));
router.get("/games-by-viewers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donnees = yield games_models_1.default.find({}).sort({ viewersDay: -1 });
        res.json(donnees);
    }
    catch (error) {
        console.error("Erreur lors de la récupération des données : ", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}));
router.get("/games-steam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donnees = yield games_steam_models_1.default.find({});
        res.json(donnees);
    }
    catch (error) {
        console.error("Erreur lors de la récupération des données : ", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}));
exports.default = router;
