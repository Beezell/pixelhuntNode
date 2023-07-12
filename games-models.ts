import mongoose from "mongoose";

const streamsSchema = new mongoose.Schema({
    streamer: String,
    title: String,
    language: String,
    viewerCount: Number,
  });

  const ViewerHistorySchema = new mongoose.Schema({
    date: Date,
    viewers: Number,
  });

  const gameSchema = new mongoose.Schema({
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

  const gameModel = mongoose.model("Game", gameSchema);

  export default gameModel;
