// src/controllers/operatorRouter.js
const express = require("express");
const { OperatorModel } = require("../models/OperatorModel");
const router = express.Router();

// Get all operators
router.get("/", async (request, response, next) => {
    let result = await OperatorModel.find({}).exec();
    response.json({
        message: "Fetched all operators",
        result: result
    });
});

// Get an operator by ID
router.get("/:id", async (request, response, next) => {
    let result = await OperatorModel.findById(request.params.id).exec();
    response.json({
        message: "Fetched operator by ID",
        result: result
    });
});

// Create a new operator
router.post("/", async (request, response, next) => {
    let operator = new OperatorModel(request.body);
    let result = await operator.save();
    response.json({
        message: "Created new operator",
        result: result
    });
});

// Update an operator by ID
router.put("/:id", async (request, response, next) => {
    let result = await OperatorModel.findByIdAndUpdate(request.params.id, request.body, { new: true }).exec();
    response.json({
        message: "Updated operator",
        result: result
    });
});

// Delete an operator by ID
router.delete("/:id", async (request, response, next) => {
    let result = await OperatorModel.findByIdAndDelete(request.params.id).exec();
    response.json({
        message: "Deleted operator",
        result: result
    });
});

module.exports = router;
