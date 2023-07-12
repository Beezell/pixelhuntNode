import express, { Request, Response } from "express";
import gameModel from "./games-models";
import GameSteamModel from "./games-steam-models";

const router = express.Router();

router.get("/games", async (req: Request, res: Response) => {
  try {
    const donnees = await gameModel.find({});
    res.json(donnees);
  } catch (error) {
    console.error("Erreur lors de la récupération des données : ", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.get("/games-by-viewers", async (req: Request, res: Response) => {
  try {
    const donnees = await gameModel.find({}).sort({ viewersDay: -1 });
    res.json(donnees);
  } catch (error) {
    console.error("Erreur lors de la récupération des données : ", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.get("/games-steam", async (req: Request, res: Response) => {
  try {
    const donnees = await GameSteamModel.find({});
    res.json(donnees);
  } catch (error) {
    console.error("Erreur lors de la récupération des données : ", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export default router;
