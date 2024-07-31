// Import the mongoose module
const mongoose = require("mongoose");

// Define the client schema
const clientSchema = mongoose.Schema({
    // Define the client name field with string array type, required, and unique constraints
    clientname: {
        type: [String],
        required: true,
        unique: true
    },
    // Define the projects field with string type and required constraint
    Projects: {
        type: String,
        required: true,
    }
});

// Create the Client model based on the client schema
const ClientModel = mongoose.model("Client", clientSchema);

// Export the Client model
module.exports = {
    ClientModel
}
