import mongoose from "mongoose";

  const GameSteamSchema = new mongoose.Schema({
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
  
  const GameSteamModel = mongoose.model("SteamGame", GameSteamSchema);

  export default GameSteamModel;