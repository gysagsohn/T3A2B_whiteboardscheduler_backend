// src/controllers/assetRouter.js
const express = require("express");
const { AssetModel } = require("../models/AssetModel");
const router = express.Router();

// Get all assets
router.get("/", async (request, response, next) => {
    let result = await AssetModel.find({}).exec();
    response.json({
        message: "Fetched all assets",
        result: result
    });
});

// Get an asset by ID
router.get("/:id", async (request, response, next) => {
    let result = await AssetModel.findById(request.params.id).exec();
    response.json({
        message: "Fetched asset by ID",
        result: result
    });
});

// Create a new asset
router.post("/", async (request, response, next) => {
    let asset = new AssetModel(request.body);
    let result = await asset.save();
    response.json({
        message: "Created new asset",
        result: result
    });
});

// Update an asset by ID
router.put("/:id", async (request, response, next) => {
    let result = await AssetModel.findByIdAndUpdate(request.params.id, request.body, { new: true }).exec();
    response.json({
        message: "Updated asset",
        result: result
    });
});

// Delete an asset by ID
router.delete("/:id", async (request, response, next) => {
    let result = await AssetModel.findByIdAndDelete(request.params.id).exec();
    response.json({
        message: "Deleted asset",
        result: result
    });
});

module.exports = router;
