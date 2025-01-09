//IMPORT .ENV FILE
require('dotenv').config();

//SETUP EXPRESS SERVER
const express = require('express');
const app = express();
const port = process.env.PORT || 2000;

//IMPORT MONGOOSE CONNECTION FUNCTION
const connection = require('./config/database');//importing the conn function from the db.js file in the config folder
connection();//calling the conn function to connect to the database

//SETUP MIDDLEWARE FOR POST REQUESTS
app.use(express.json());

//IMPORTS NFLROUTES FILE AND SETUP MIDDLEWARE TO USE FOR THE ENDPOINT
const nflRoutes = require('./routes/nflRoutes');
app.use('/api/teams', nflRoutes);

//IMPORT MODELS (EXAMPLE: const model Name = require('./folder name/file_name'))
const Team = require('./models/teams');
const Player = require('./models/players');
const Game = require('./models/games');

//SETUP A HOME/ROOT ROUTE
app.get('/', (req, res) => {
    res.send('Welcome to the NFL API');
});

//GET ROUTE TEAM
app.get('/teams/seed', async (req, res) => {
    try {
        await Team.deleteMany({});//This command will delete all the documents in the teams collection. This effectively clears the collection before adding new data.
        const seededTeams = await Team.create(defaultTeams);//This creates new documents in the teams collection using the defaultTeams array.
        res.json({ //This sends a JSON response with a message indicating that the teams were seeded successfully along with the seeded teams data.
            message: 'Teams seeded successfully' ,
            teams: seededTeams
        });

    } catch (error) {
        console.log(`Somthing went wrong: ${error.message}`)
    }
});

//GET ROUTE PLAYER
app.get('/players/seed', async (req, res) => {
    try {
        await Player.deleteMany({});//This deletes all the documents in the players collection.
        const seededPlayer = await Player.create(defaultPlayers);//This creates new documents in the players collection using the defaultPlayers array.
        res.json({ //This sends a JSON response with a message indicating that the teams were seeded successfully along with the seeded teams data.
            message: 'Players seeded successfully',
            players: seededPlayer, 
        });

    } catch (error) {
        console.log(`Somthing went wrong: ${error.message}`)
    }
});

//GET ROUTE GAME
app.get('/games/seed', async (req, res) => {
    try {
        await Game.deleteMany({});//This deletes all the documents in the games collection.
        const seededGame = await Game.create(defaultGames);//This creates new documents in the games collection using the defaultGames array.
        res.json({ 
            message: 'Games seeded successfully',
            games: seededGame,
        });//This sends a JSON response with a message indicating that the games were seeded successfully.

    } catch (error) {
        console.log(`Somthing went wrong: ${error.message}`)
    }
});

//SETUP PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})




