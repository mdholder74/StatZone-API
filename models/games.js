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
  

  