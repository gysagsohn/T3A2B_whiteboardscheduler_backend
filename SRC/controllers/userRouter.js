const express = require("express");
const { UserModel } = require("../models/UserModel")
const router = express.Router()

router.get("/", async (request, response, next) =>{

    let result = await UserModel.find({}).exec();

    response.json({
        message:"User Route is working",
        result: result
    });

});

module.exports = router;