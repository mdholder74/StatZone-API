// MODEL VIEW CONTROLLER

// IMPORTING MONGOOSE LIBRARY
const mongoose = require('mongoose'); // This imports the Mongoose library to interact with a MongoDB database.

// SCHEMA
const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
    enum: [
      'Quarterback',
      'Running Back',
      'Wide Receiver',
      'Tight End',
      'Offensive Lineman',
      'Left Tackle',
      'Right Tackle',
      'Left Guard',
      'Right Guard',
      'Center',
      'Defensive Lineman',
      'Defensive Tackle',
      'Defensive End',
      'Linebacker',
      'Middle Linebacker',
      'Outside Linebacker',
      'Cornerback',
      'Safety',
      'Free Safety',
      'Strong Safety',
      'Kicker',
      'Punter',
      'Long Snapper',
      'Kick Returner',
      'Punt Returner'
    ],
  },
  stats: {
    gamesPlayed: {
      type: Number,
      required: true,
      default: 0,
    },
    touchdowns: {
      type: Number,
      required: true,
      default: 0,
    },
    receivingYards: {
      type: Number,
      required: true,
      min: 0,
      max: 25000,
    },
    passingYards: {
      type: Number,
      required: true,
      min: 0,
      max: 100000,
    },
  },
}, { timestamps: true });

// MODEL
const Player = mongoose.model('Player', playerSchema); //This creates a new model based on the schema and returns it. The model is then exported so it can be used in other files.

// EXPORT MODEL
module.exports = Player; //This exports the Player model so it can be used in other files. The first argument is the name of the model, and the second argument is the schema that defines the structure of the model. The model function creates a new model based on the schema and returns it. The model is then exported so it can be used in other files.

  


  