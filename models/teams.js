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
    superbowlWins: {
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

  //MODEL
  const Team = mongoose.model('Team', teamSchema);//This creates a new model based on the schema and returns it. The model is then exported so it can be used in other files.

  //EXPORT MODEL
  module.exports = Team;//This exports the Team model so it can be used in other files. The first argument is the name of the model, and the second argument is the schema that defines the structure of the model. The model function creates a new model based on the schema and returns it. The model is then exported so it can be used in other files.

  