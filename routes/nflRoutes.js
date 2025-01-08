//SETUP EXPRESS SERVER
const express = require('express');
const router = express.Router();

//IMPORT MODELS (EXAMPLE: const model Name = require('./folder name/file_name'))
const Team = require('../models/teams');
const Player = require('../models/players');
const Game = require('../models/games');

//SERVER-SIDE ROUTES

//GET ROUTE TEAM


//EXPORT ROUTES
module.exports = router;//exporting the router