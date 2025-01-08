//MODEL VIEW CONTROLLER

////IMPORTING MONGOOSE LIBRARY
const mongoose = require('mongoose');//This imports the Mongoose library to interact with a MongoDB database.

//SCHEMA
const playerSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
        enum: [
          'Quarterback',
          'Wide Receiver',
          'Running Back',
          'Tight End',
          'Linebacker',
          'Cornerback',
          'Safety',
          'Kicker',
          'Punter',
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
      },
    },
    { timestamps: true }
  );
  


  