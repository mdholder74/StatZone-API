//IMPORT .ENV FILE
require('dotenv').config();

//SETUP EXPRESS SERVER
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//IMPORT MONGOOSE CONNECTION FUNCTION
const connection = require('./config/database');//importing the conn function from the db.js file in the config folder
connection();//calling the conn function to connect to the database

const Team = require('./models/Team');
const Player = require('./models/Player');
const Game = require('./models/Game');

// Function to seed the database
const seedDB = async () => {
    await Team.deleteMany({});
    await Player.deleteMany({});
    await Game.deleteMany({});
  
    await Team.insertMany(teams);
    await Player.insertMany(players);
    await Game.insertMany(games);
  
    console.log('Database seeded!');
    mongoose.connection.close();
  };
  
  // Run the seed function
  seedDB();

//SETUP PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})




