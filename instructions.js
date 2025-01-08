/*
🛠️ 1ST PART: PROJECT SETUP
// 💻 Step 1: Run this command in your terminal to initialize your project:
npm init -y

// 💻 Step 2: Run this command to install necessary packages:
npm install dotenv express mongoose

// 📂 Step 3: Create the following folders in the root of your project:
// - config
// - models
// - routes
// - views

// 📄 Step 4: Create a `.env` file in the root of your project.

// 📄 Step 5: Create a `.gitignore` file in the root of your project.

// ✏️ Step 6: Add the following to your `.gitignore` file to prevent sensitive files from being tracked by Git:
node_modules/
.env

// ✏️ Step 7: In your `.env` file, add the following environment variables:
PORT=5000
MONGO_URI=your_mongo_uri_here

// 🔗 Step 8: Update the `MONGO_URI` with your actual MongoDB connection string.
// Example: mongodb+srv://<username>:<password>@cluster0.mongodb.net/your_database_name_here
*/

/*
📄 2ND PART: SETTING UP index.js

// 📄 Step 1: Create a new file called `index.js` in the root of your project.

// 🖊️ Step 2: Add the following code to `index.js`:

require('dotenv').config(); // Loads environment variables from .env file
const express = require('express'); // Imports Express
const app = express(); // Creates an Express app
const port = process.env.PORT || 5000; // Sets the port

// Starts the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// 📄 Step 1: Create a new file called `db.js` in the `config` folder.

// 🖊️ Step 2: Add the following code to `db.js` to set up the connection:

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected!');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

*/

/*
🛢️ 3RD PART: DATABASE CONNECTION (db.js)
// 📄 Step 1: Create a new file called `db.js` in the `config` folder.

// 🖊️ Step 2: Add the following code to `db.js` to set up the connection:

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected!');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

// 📄 Step 3: Go back to `index.js` and import this function:
const connectDB = require('./config/db');

// 🖊️ Step 4: Call the `connectDB` function in `index.js` to connect to the database:
connectDB();
*/

/*
🍉 4TH PART: MODEL SETUP (fruit.js)
// 📄 Step 1: Create a new file called `fruit.js` in the `models` folder.

// 🖊️ Step 2: Add the following code to define a Fruit model:

const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    taste: {
        type: String,
    },
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;

*/

/*
🌱 5TH PART: SEED DATA SETUP (seed.js)
// 📄 Step 1: Create a new file called `seed.js` in the `config` folder.

// 🖊️ Step 2: Add the following code to define your seed data:

const starterFruits = [
    { name: 'Apple', color: 'Red', taste: 'Sweet' },
    { name: 'Banana', color: 'Yellow', taste: 'Sweet' },
    { name: 'Lemon', color: 'Yellow', taste: 'Sour' },
];

module.exports = starterFruits;

*/

/*
🌐 6TH PART: ROUTE SETUP (index.js)
// 📄 Step 1: Go back to `index.js` and import your Fruit model and starterFruits array:

const Fruit = require('./models/fruit');
const starterFruits = require('./config/seed');

// 🖊️ Step 2: Add a route to seed the database:

app.get('/fruits/seed', async (req, res) => {
    try {
        // Delete all existing fruits
        await Fruit.deleteMany({});

        // Add the starter fruits
        const fruits = await Fruit.create(starterFruits);

        // Send a success response with the seeded data
        res.json({
            message: 'Fruits seeded successfully!',
            fruits,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to seed fruits.',
            error: error.message,
        });
    }
});

*/