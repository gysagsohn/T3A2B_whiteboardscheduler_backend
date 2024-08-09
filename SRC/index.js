// Import the app from the server.js file
const { app } = require("./server.js");

// Import the databaseConnect function from the database.js file
const { databaseConnect } = require("./utils/database.js");

// Set the port number from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log("Server successfully started!");

    // After the server successfully starts, connect to the database
    databaseConnect();
});
