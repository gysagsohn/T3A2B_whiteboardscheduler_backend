// src/controllers/allocationRouter.js
const express = require("express");
const { AllocationModel } = require("../models/AllocationModel");
const router = express.Router();

// Utility function to handle errors
const handleError = (res, err, statusCode = 500) => {
    console.error(err);
    res.status(statusCode).json({ message: err.message });
};

// Get all allocations
router.get("/", async (req, res, next) => {
    try {
        const result = await AllocationModel.find({})
            .populate('asset')
            .populate('operator')
            .populate('client')
            .exec();
        res.json({
            message: "Fetched all allocations",
            result: result
        });
    } catch (err) {
        handleError(res, err);
    }
});

// Get an allocation by ID
router.get("/:id", async (req, res, next) => {
    try {
        const result = await AllocationModel.findById(req.params.id)
            .populate('asset')
            .populate('operator')
            .populate('client')
            .exec();
        if (!result) {
            return res.status(404).json({ message: "Allocation not found" });
        }
        res.json({
            message: "Fetched allocation by ID",
            result: result
        });
    } catch (err) {
        handleError(res, err, 400); // Bad Request for invalid ID format
    }
});

// Create a new allocation
router.post("/", async (req, res, next) => {
    try {
        const { asset, operator, client, allocationDate, shiftType, date } = req.body;

        if (!asset || !operator || !client || !allocationDate || !shiftType || !date) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const allocation = new AllocationModel(req.body);
        const result = await allocation.save();
        res.json({
            message: "Created new allocation",
            result: result
        });
    } catch (err) {
        handleError(res, err);
    }
});

// Update an allocation by ID
router.put("/:id", async (req, res, next) => {
    try {
        const result = await AllocationModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
        if (!result) {
            return res.status(404).json({ message: "Allocation not found" });
        }
        res.json({
            message: "Updated allocation",
            result: result
        });
    } catch (err) {
        handleError(res, err, 400); // Bad Request for invalid ID format
    }
});

// Delete an allocation by ID
router.delete("/:id", async (req, res, next) => {
    try {
        const result = await AllocationModel.findByIdAndDelete(req.params.id).exec();
        if (!result) {
            return res.status(404).json({ message: "Allocation not found" });
        }
        res.json({
            message: "Deleted allocation",
            result: result
        });
    } catch (err) {
        handleError(res, err, 400); // Bad Request for invalid ID format
    }
});

module.exports = router;
