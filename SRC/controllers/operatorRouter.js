// src/controllers/operatorRouter.js
const express = require("express");
const { OperatorModel } = require("../models/OperatorModel");
const router = express.Router();

const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Get all operators
router.get("/", asyncHandler(async (req, res, next) => {
    let result = await OperatorModel.find({}).exec();
    res.json({
        message: "Fetched all operators",
        result: result
    });
}));

// Get an operator by ID
router.get("/:id", asyncHandler(async (req, res, next) => {
    let result = await OperatorModel.findById(req.params.id).exec();
    if (!result) {
        return res.status(404).json({ message: "Operator not found" });
    }
    res.json({
        message: "Fetched operator by ID",
        result: result
    });
}));

// Create a new operator
router.post("/", asyncHandler(async (req, res, next) => {
    const { operatorname, licenceClass, availabledate } = req.body;

    if (!operatorname || !licenceClass || !availabledate) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const existingOperator = await OperatorModel.findOne({ operatorname }).exec();
    if (existingOperator) {
        return res.status(400).json({ message: "Operator with this name already exists" });
    }

    let operator = new OperatorModel(req.body);
    try {
        let result = await operator.save();
        res.status(201).json({
            message: "Created new operator",
            result: result
        });
    } catch (error) {
        res.status(400).json({ message: "Invalid operator data", error: error.message });
    }
}));

// Update an operator by ID
router.put("/:id", asyncHandler(async (req, res, next) => {
    try {
        let result = await OperatorModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).exec();
        if (!result) {
            return res.status(404).json({ message: "Operator not found" });
        }
        res.json({
            message: "Updated operator",
            result: result
        });
    } catch (error) {
        res.status(400).json({ message: "Invalid operator data", error: error.message });
    }
}));

// Delete an operator by ID
router.delete("/:id", asyncHandler(async (req, res, next) => {
    let result = await OperatorModel.findByIdAndDelete(req.params.id).exec();
    if (!result) {
        return res.status(404).json({ message: "Operator not found" });
    }
    res.json({
        message: "Deleted operator",
        result: result
    });
}));

module.exports = router;
