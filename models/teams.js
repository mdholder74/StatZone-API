//MODEL VIEW CONTROLLER

////IMPORTING MONGOOSE LIBRARY
const mongoose = require('mongoose');//This imports the Mongoose library to interact with a MongoDB database.

//SCHEMA
const teamSchema = new mongoose.Schema({//This creates a new schema for the games collection in the database.
    teamName: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    foundedYear: {
      type: Number,
      required: true,
    },
    championshipsWon: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    rating: {
      type: Number,
      default: 0, 
    },
    franchisePlayers: [
      {
        name: {
          type: String,
          required: true,
        },
        position: {
          type: String,
          required: true,
        },
        jerseyNumber: {
          type: Number,
          required: true,
          min: 0,
          max: 99, 
        },
      },
    ],
  }, { timestamps: true }); // Automatically adds createdAt and updatedAt fields
  