//MODEL VIEW CONTROLLER

////IMPORTING MONGOOSE LIBRARY
const mongoose = require('mongoose');//This imports the Mongoose library to interact with a MongoDB database.

//SCHEMA
const gameSchema = new mongoose.Schema({//This creates a new schema for the game model.
  teamName: {
    type: String,
  },
  city: {
    type: String,
  },
  foundedYear: {
    type: Number,
    },
  championshipsWon: {
    type: Number,
  },
  rating: {
    type: Number,
    required: true,
    },
    players: [
    { id: 1, name: "Justin Jefferson", position: "Wide Receiver", jerseyNumber: 18 },
    { id: 2, name: "Sam Darnold", position: "Quarterback", jerseyNumber: 14 }
    ]

})