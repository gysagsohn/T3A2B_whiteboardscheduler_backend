const express = require("express");
const { UserModel } = require("../models/UserModel")
const { createJwt, validateJwt } = require("../utils/auth");
const router = express.Router()

//ground work for controller and can add models to this
router.get("/", async (request, response, next) =>{

    let result = await UserModel.find({}).exec();
    response.json({
        message:"Fetched all users",
        result: result
    });
}); 

// Get a user by ID
router.get("/:id", async (request, response, next) => {
    let result = await UserModel.findById(request.params.id).exec();
    response.json({
        message: "Fetched user by ID",
        result: result
    });
});

// Create a new user
router.post("/", async (request, response, next) => {
    let user = new UserModel(request.body);
    let result = await user.save();
    let token = createJwt(result._id);
    response.json({
        message: "Created new user",
        result: result,
        token: token
    });
});

// Update a user by ID
router.put("/:id", async (request, response, next) => {
    let result = await UserModel.findByIdAndUpdate(request.params.id, request.body, { new: true }).exec();
    response.json({
        message: "Updated user",
        result: result
    });
});

// Delete a user by ID
router.delete("/:id", async (request, response, next) => {
    let result = await UserModel.findByIdAndDelete(request.params.id).exec();
    response.json({
        message: "Deleted user",
        result: result
    });
});

module.exports = router;