// Import the mongoose module
const mongoose = require("mongoose");

// Function to connect to the database
async function databaseConnect() {
    // Get the database URL from the environment variables, or use a default local URL if not provided
    let databaseURL = process.env.DATABASE_URL || "mongodb://localhost:27017/oct23-blog-db-round2";

    // Use mongoose to connect to the database
    await mongoose.connect(databaseURL);
    console.log("Database connection completed!");
}

// Export the databaseConnect function for use in other files
module.exports = {
    databaseConnect
}