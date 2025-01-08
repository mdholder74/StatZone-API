//Connecting to MongoDB with Mongoose and Environment Variables

//IMPORTING MONGOOSE LIBRARY
const mongoose = require('mongoose');//This imports the Mongoose library to interact with a MongoDB database.

//CONNECT TO MONGODB
const connection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)//This connects to the MongoDB database using the MONGO_URI environment variable
        mongoose.connection.once('open', () => {//once is a method that listens for a specific event to occur in this case the open event. The open event is triggered when the connection to the database is established.
            console.log('Connected to MongoDB');
        })
    } catch (error) {
        console.log('Error connecting to MongoDB', error);

    }
}

module.exports = connection;//This exports the connection function so it can be used in other files.