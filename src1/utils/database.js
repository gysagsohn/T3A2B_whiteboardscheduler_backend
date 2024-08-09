// Import the mongoose module
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

// Function to connect to the database
async function databaseConnect() {
    // Get the database URL from the environment variables, or use a default local URL if not provided
    let databaseURL = process.env.DATABASE_URL || "mongodb://localhost:27017/whitebaord-backend";

    // Use mongoose to connect to the database
    await mongoose.connect(databaseURL);
    console.log("Database connection completed!");
}

// Function to close the database connection
async function databaseClose(){
    await mongoose.connection.close();
    console.log("Database connection closed!");
}

// Function to clear the database
async function databaseDrop() {
    await mongoose.connection.dropDatabase();
    console.log("Database dropped!");
}


// Export the databaseConnect function for use in other files
module.exports = {
    databaseConnect,
    databaseClose,
    databaseDrop
};