//MODEL VIEW CONTROLLER

////IMPORTING MONGOOSE LIBRARY
const mongoose = require('mongoose');//This imports the Mongoose library to interact with a MongoDB database.

//SCHEMA
const gameSchema = new mongoose.Schema(
    {
      homeTeam: {
        type: String,
        required: true,
      },
      awayTeam: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now, 
      },
      score: {
        homeTeamScore: {
          type: Number,
          required: true,
        },
        awayTeamScore: {
          type: Number,
          required: true,
        },
      },
      location: {
        stadium: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          default: "USA", 
        },
      },
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt
  );
  
  //MODEL
  const Game = mongoose.model('Game', gameSchema);//This creates a new model based on the schema and returns it. The model is then exported so it can be used in other files.

  //EXPORT MODEL
  module.exports = Game;//This exports the game model so it can be used in other files. The first argument is the name of the model, and the second argument is the schema that defines the structure of the model. The model function creates a new model based on the schema and returns it. The model is then exported so it can be used in other files.

  