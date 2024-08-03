const express = require("express");
const { ClientModel } = require("../models/ClientModel");
const router = express.Router();

const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Get all clients
router.get("/", asyncHandler(async (req, res, next) => {
    let result = await ClientModel.find({}).exec();
    res.json({
        message: "Fetched all clients",
        result: result
    });
}));

// Get a client by ID
router.get("/:id", asyncHandler(async (req, res, next) => {
    let result = await ClientModel.findById(req.params.id).exec();
    if (!result) {
        return res.status(404).json({ message: "Client not found" });
    }
    res.json({
        message: "Fetched client by ID",
        result: result
    });
}));

// Create a new client
router.post("/", asyncHandler(async (req, res, next) => {
    const { clientname } = req.body;
    const existingClient = await ClientModel.findOne({ clientname }).exec();
    if (existingClient) {
        return res.status(400).json({ message: "Client with this name already exists" });
    }

    let client = new ClientModel(req.body);
    try {
        let result = await client.save();
        res.status(201).json({
            message: "Created new client",
            result: result
        });
    } catch (error) {
        res.status(400).json({ message: "Invalid client data", error: error.message });
    }
}));

// Update a client by ID
router.put("/:id", asyncHandler(async (req, res, next) => {
    try {
        let result = await ClientModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).exec();
        if (!result) {
            return res.status(404).json({ message: "Client not found" });
        }
        res.json({
            message: "Updated client",
            result: result
        });
    } catch (error) {
        res.status(400).json({ message: "Invalid client data", error: error.message });
    }
}));

// Delete a client by ID
router.delete("/:id", asyncHandler(async (req, res, next) => {
    let result = await ClientModel.findByIdAndDelete(req.params.id).exec();
    if (!result) {
        return res.status(404).json({ message: "Client not found" });
    }
    res.json({
        message: "Deleted client",
        result: result
    });
}));

module.exports = router;
