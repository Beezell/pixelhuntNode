"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_pixelhunt_mongo_1 = __importDefault(require("./db-pixelhunt-mongo"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
    next();
});
// Connexion à la base de données
(0, db_pixelhunt_mongo_1.default)();
// Utilisation des routes
app.use("/api", routes_1.default);
// Démarrage du serveur
const port = 3000;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
