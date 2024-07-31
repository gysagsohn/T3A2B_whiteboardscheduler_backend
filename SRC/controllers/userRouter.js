const express = require("express");
const { UserModel } = require("../models/UserModel")
const router = express.Router()

//ground work for controller and can add models to this
router.get("/", async (request, response, next) =>{

    let result = await UserModel.find({}).exec();

    response.json({
        message:"User Route is working",
        result: result
    });

}); 

router.get("./:id", (request, response, next) => {
    response.json({
        message:"User Route is working"
    });
})

router.post("./:id", (request, response, next) => {
    response.json({
        message:"User Route is working"
    });
})


router.put("./:id", (request, response, next) => {
    response.json({
        message:"User Route is working"
    });
})


router.delete("./:id", (request, response, next) => {
    response.json({
        message:"User Route is working"
    });
})


module.exports = router;