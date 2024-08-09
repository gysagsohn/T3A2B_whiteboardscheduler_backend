const express = require("express");
const { UserModel } = require("../models/UserModel");
const { comparePasswords, createJwt } = require("../utils/auth");
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

// Route to get all users (protected)
router.get("/", authenticateToken, async (req, res) => {
    const users = await UserModel.find({});
    res.json({ message: "Users fetched successfully", result: users });
});

// Route to get a specific user by ID (protected)
router.get("/:id", authenticateToken, async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User fetched successfully", result: user });
});

// Route to handle user login
router.post("/login", async (req, res) => {
    const { useremail, password } = req.body;

    if (!useremail || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await UserModel.findOne({ useremail });
    if (!user || !(await comparePasswords(password, user.password))) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = createJwt(user._id);
    res.json({ message: "Login successful", token });
});

// Route to handle user signup
router.post("/signup", async (req, res) => {
    const { useremail } = req.body;

    const existingUser = await UserModel.findOne({ useremail });
    if (existingUser) {
        return res.status(400).json({ message: "User with this email already exists" });
    }

    const user = new UserModel(req.body);
    const result = await user.save();

    const token = createJwt(user._id);
    res.status(201).json({ message: "User created successfully", token });
});

// Route to handle user logout
router.post("/logout", (req, res) => {
    res.json({ message: "Logout successful" });
});

module.exports = router;
