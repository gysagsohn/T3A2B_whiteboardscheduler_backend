// src/controllers/userRouter.js
const express = require("express");
const { UserModel } = require("../models/UserModel");
const { comparePasswords, createJwt } = require("../utils/auth");
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

router.get("/", authenticateToken, asyncHandler(async (req, res, next) => {
    let result = await UserModel.find({}).exec();
    res.json({
        message: "User Route is working",
        result: result
    });
}));

router.get("/:id", authenticateToken, asyncHandler(async (req, res, next) => {
    let result = await UserModel.findById(req.params.id).exec();
    if (!result) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json({
        message: "User Route is working",
        result: result
    });
}));

router.post("/login", asyncHandler(async (req, res, next) => {
    const { useremail, password } = req.body;

    if (!useremail || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const user = await UserModel.findOne({ useremail }).exec();
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isMatch = await comparePasswords(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = createJwt(user._id);

        // Set JWT as HttpOnly cookie
        res.cookie('jwtToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'Strict',
        });

        // Send the token in the response body as well
        res.json({ message: "Login successful" });
    } catch (error) {
        next(error); 
    }
}));

// User logout route
router.post("/logout", (req, res) => {
    res.cookie('jwtToken', '', { maxAge: 1 }); // Clear the token
    res.json({ message: "Logged out successfully" });
});

// Sign up route
router.post("/signup", asyncHandler(async (req, res, next) => {
    const { useremail } = req.body;
    const existingUser = await UserModel.findOne({ useremail }).exec();
    if (existingUser) {
        return res.status(400).json({ message: "User with this email already exists" });
    }

    let user = new UserModel(req.body);
    try {
        let result = await user.save();
        // Automatically log in the user after successful signup by setting the JWT cookie
        const token = createJwt(user._id);
        res.cookie('jwtToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'Strict',
        });
        res.status(201).json({
            message: "Created new user",
            result: result
        });
    } catch (error) {
        res.status(400).json({ message: "Invalid user data", error: error.message });
    }
}));

module.exports = router;
