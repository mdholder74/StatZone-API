//SETUP EXPRESS SERVER
const express = require('express');
const router = express.Router();

//IMPORT MODELS (EXAMPLE: const model Name = require('./folder name/file_name'))
const Team = require('../models/teams');
const Player = require('../models/players');
const Game = require('../models/games');


//ALL GET ROUTES BELOW THIS SECTION


//GET ROUTE TEAM
router.get('/', async (req, res) => {
    try {
        const allTeams = await Team.find({});//This retrieves all the documents in the teams collection.
        res.json(allTeams);//This sends a JSON response with the retrieved teams data.

    } catch (error) {
        console.log(`Somthing went wrong: ${error.message}`)
    }
})

//GET ROUTE PLAYER
router.get('/', async (req, res) => {
    try{
        const allPlayers = await Player.find({});//This retrieves all the documents in the players collection.
        res.json(allPlayers);//This sends a JSON response with the retrieved players data.
    } catch (error) {
        console.log(`Somthing went wrong: ${error.message}`)
    }
})

//GET ROUTE GAME
router.get('/', async (req, res) => {
    try{
        const allGames = await Game.find({});//This retrieves all the documents in the games collection.
        res.json(allGames);//This sends a JSON response with the retrieved games data

    } catch (error) {
        console.log(`Somthing went wrong: ${error.message}`)
    }
})

//ALL POST ROUTES BELOW THIS SECTION


//POST ROUTE TEAM
router.post('/', async (req, res) => {
    try{
        const createdTeam = await Team.create(req.body);//This creates a new document in the teams collection using the data from the request body.
        res.json(createdTeam);//This sends a JSON response with the created team data.

    } catch (error) {
        console.log(`Somthing went wrong: ${error.message}`)
    }
})

//POST ROUTE PLAYER
router.post('/', async (req, res) => {
    try{
        const createdPlayer = await Player.create(req.body);//This creates a new document in the players collection using the data from the request body.
        res.json(createdPlayer);//This sends a JSON response with the created player data.

    } catch (error) {
        console.log(`Somthing went wrong: ${error.message}`)
    }
})

//POST ROUTE GAME
router.post('/', async (req, res) => {{
    try{
        const createdGame = await Game.create(req.body);//This creates a new document in the games collection using the data from the request body.
        res.json(createdGame);//This sends a JSON response with the created game data.

    }catch (error) {
        console.log(`Somthing went wrong: ${error.message}`)
    }
}})

//ALL GET ROUTES BY ID BELOW THIS SECTION


//GET ROUTE TEAM BY ID
router.get('/:id', async (req, res) => {
    try{
        const foundTeam = await Team.findById(req.params.id);//This retrieves a specific document in the teams collection using the ID from the request parameters.
        res.json(foundTeam);//This sends a JSON response with the retrieved team data.

    }catch{
        console.log(`Somthing went wrong: ${error.message}`)
    }
})

//GET ROUTE PLAYER BY ID
router.get('/:id', async (req, res) => {
    try{
        const foundPlayer = await Player.findById(req.params.id);//This retrieves a specific document in the players collection using the ID from the request parameters.
        res.json(foundPlayer);//This sends a JSON response with the retrieved player data.

    }catch{
        console.log(`Somthing went wrong: ${error.message}`)
    }
})

//GET ROUTE GAME BY ID
router.get('/:id', async (req, res) => {
    try{
        const foundGame = await Game.findById(req.params.id);//This retrieves a specific document in the games collection using the ID from the request parameters.
        res.json(foundGame);//This sends a JSON response with the retrieved game data.

    }catch{
        console.log(`Somthing went wrong: ${error.message}`)
    }
})

//ALL PUT ROUTES BELOW THIS SECTION


//PUT ROUTE TEAM BY ID
router.put('/:id', async (req, res) => {
    try{
        const updatedTeam = await Team.findByIdAndUpdate(req.params.id, req.body, {new: true});//It finds a team in the teams collection by its ID (req.params.id), updates it with the new data from the request body (req.body), and returns the updated team data with the {new: true} option.
        res.json(updatedTeam);//This sends a JSON response with the updated team data.
    }catch{
        console.log(`Somthing went wrong: ${error.message}`)
    }
})

//PUT ROUTE PLAYER BY ID
router.put('/:id', async (req, res) => {
    try{
        const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body, {new: true});//It finds a player in the players collection by its ID (req.params.id), updates it with the new data from the request body (req.body), and returns the updated player data with the {new: true} option.
        res.json(updatedPlayer);//This sends a JSON response with the updated player data.
    }catch{
        console.log(`Somthing went wrong: ${error.message}`)
    }
})

//PUT ROUTE GAME BY ID
//This sets up a PUT endpoint for the route /api/games/:id.
router.put('/:id', async (req, res) => {
    try{
        const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {new: true});//It finds a game in the games collection by its ID (req.params.id), updates it with the new data from the request body (req.body), and returns the updated game data with the {new: true} option.
        res.json(updatedGame);//This sends a JSON response with the updated game data.
    }catch{
        console.log(`Somthing went wrong: ${error.message}`)
    }
})

//ALL DELETE ROUTES BELOW THIS SECTION


//DELETE ROUTE FOR ALL MODELS
// DELETE request to /api/teams/:id
router.delete('/:id', async (req, res) => {
    try {
      const deletedTeam = await Team.findByIdAndDelete(req.params.id);
      const deletedGame = await Game.findByIdAndDelete(req.params.id);
      const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
  
      if (!deletedTeam && !deletedGame && !deletedPlayer) {
        return res.status(404).json({ message: 'No matching documents found to delete.' });
      }
  
      res.json({
        message: 'Documents deleted successfully.',
        deletedTeam,
        deletedGame,
        deletedPlayer,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  

//EXPORT ROUTES
module.exports = router;//exporting the router