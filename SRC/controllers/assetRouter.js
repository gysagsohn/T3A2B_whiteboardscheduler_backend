// assetRouter.js
const express = require("express");
const { AssetModel } = require("../models/AssetModel");
const router = express.Router();

const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Get all assets
router.get("/", asyncHandler(async (req, res, next) => {
    let result = await AssetModel.find({}).exec();
    res.json({
        message: "Fetched all assets",
        result: result
    });
    console.log(AssetModel.schema.path('assetType').enumValues);
}));

// Endpoint to fetch asset types
router.get("/asset-types", asyncHandler(async (req, res) => {
    res.json({
        assetTypes: AssetModel.schema.path('assetType').caster.enumValues
    });
    console.log(AssetModel.schema.path('assetType').caster.enumValues);
}));

// Endpoint to fetch license classes
router.get("/licence-classes", asyncHandler(async (req, res) => {
    res.json({
        licenceClasses: AssetModel.schema.path('licenceClass').caster.enumValues
    });
    console.log(AssetModel.schema.path('licenceClass').caster.enumValues);
}));

// Get an asset by ID
router.get("/:id", asyncHandler(async (req, res, next) => {
    let result = await AssetModel.findById(req.params.id).exec();
    if (!result) {
        return res.status(404).json({ message: "Asset not found" });
    }
    res.json({
        message: "Fetched asset by ID",
        result: result
    });
}));

// Create a new asset
router.post("/", asyncHandler(async (req, res, next) => {
    const { assetnumber, rego } = req.body;

    const existingAsset = await AssetModel.findOne({ 
        $or: [{ assetnumber }, { rego }] 
    }).exec();

    if (existingAsset) {
        return res.status(400).json({ message: "Asset with this number or registration already exists" });
    }

    let asset = new AssetModel(req.body);

    try {
        let result = await asset.save();
        res.status(201).json({
            message: "Created new asset",
            result: result
        });
    } catch (error) {
        res.status(400).json({ message: "Invalid asset data", error: error.message });
    }
}));

// Update an asset by ID
router.put("/:id", asyncHandler(async (req, res, next) => {
    try {
        let result = await AssetModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).exec();
        if (!result) {
            return res.status(404).json({ message: "Asset not found" });
        }
        res.json({
            message: "Updated asset",
            result: result
        });
    } catch (error) {
        res.status(400).json({ message: "Invalid asset data", error: error.message });
    }
}));

// Delete an asset by ID
router.delete("/:id", asyncHandler(async (req, res, next) => {
    let result = await AssetModel.findByIdAndDelete(req.params.id).exec();
    if (!result) {
        return res.status(404).json({ message: "Asset not found" });
    }
    res.json({
        message: "Deleted asset",
        result: result
    });
}));

module.exports = router;
