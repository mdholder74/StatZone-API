//IMPORT .ENV FILE
require('dotenv').config();

//SETUP EXPRESS SERVER
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//IMPORT MONGOOSE CONNECTION FUNCTION
const connection = require('./config/database');//importing the conn function from the db.js file in the config folder
connection();//calling the conn function to connect to the database

//SETUP PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})




