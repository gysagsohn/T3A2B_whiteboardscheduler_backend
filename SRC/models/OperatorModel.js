// Import the mongoose module
const mongoose = require("mongoose");

// Define the operator schema
const operatorSchema = mongoose.Schema({
    // Define the operator name field with string array type, required, and unique constraints
    operatorName: {
        type: [String],
        required: true,
        unique: true
    },
    // Define the license class field
    licenceClass: {
        // As this is the same in Asset Model, it might be made into its own model
        type: [String],
        enum: ["c", "HR", "HC"],
        required: true
    }
    // Define the available days field with array of strings type and enum constraints
    availableDays: {
        type: [String],
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        required: true
    }
});

// Create the Operator model based on the operator schema
const OperatorModel = mongoose.model("Operator", operatorSchema);

// Export the Operator model
module.exports = {
    OperatorModel
}
