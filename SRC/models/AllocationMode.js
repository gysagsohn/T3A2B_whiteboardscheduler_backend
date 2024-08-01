const mongoose = require("mongoose");

const allocationSchema = mongoose.Schema({
    asset:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "asset",
        required: true
    },
    operator:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Operator",
        required: true
    },
    client:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Client",
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    shiftType:{
        type: String,
        enum: ["Day", "Night"],
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const AllocationModel = mongoose.model("Allocation", allocationSchema);

module.exports = {
    AllocationModel
}