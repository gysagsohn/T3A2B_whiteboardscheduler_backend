// Import the mongoose module
const mongoose = require("mongoose");

// Define the asset schema
const assetSchema = mongoose.Schema({
    // Define the asset number field with integer type, required, and unique constraints
    assetnumber: {
        type: Number,
        required: true,
        unique: true
    },
    // Define the asset type field with string array type, enum options, and required constraint
    assetType: {
        // Note: This might change to allow user-defined types instead of fixed enum options
        type: [String],
        enum: ["Vac Truck 6000L", "Vac Truck 8000L", "Vac Truck Comboo", "Tipper 2t", "Tipper 4T"],
        required: true
    },
    // Define the registration field with string type, required, and unique constraints
    rego: {
        type: String,
        required: true,
        unique: true
    },
    // Define the license class field with string array type, enum options, and required constraint
    licenceClass: {
        assettype: {
            // Note: This might be moved to its own model as it's the same in both asset and operator models
            type: [String],
            enum: ["C", "HR", "HC"],
            required: true
        }
    }
});

// Create the Asset model based on the asset schema
const AssetModel = mongoose.model("Asset", assetSchema);

// Export the Asset model
module.exports = {
    AssetModel
}
