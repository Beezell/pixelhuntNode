import express from "express";
import connectDB from "./db-pixelhunt-mongo";
import routes from "./routes";

const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
  next();
})

// Connexion à la base de données
connectDB();

// Utilisation des routes
app.use("/api", routes);

// Démarrage du serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
