// Import the mongoose module
const mongoose = require("mongoose");

// Define the allocation schema
const allocationSchema = mongoose.Schema({
    // Reference to the Asset model
    asset: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Asset",
        required: true
    },
    // Reference to the Operator model
    operator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Operator",
        required: true
    },
    // Reference to the Client model
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
        required: true
    },
    // Date field for the job allocation
    date: {   
        type: Date,
        required: true
    },
    // Field for the shift type with enum options for day and night
    shiftType: {
        type: String,
        enum: ["Day", "Night"],
        required: true
    },
    // Optional description field for additional job details
    description: {
        type: String,
        required: false
    }
});

// Create the Allocation model based on the allocation schema
const AllocationModel = mongoose.model("Allocation", allocationSchema);

// Export the Allocation model
module.exports = {
    AllocationModel
};
