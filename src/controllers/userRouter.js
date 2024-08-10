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

// Route to delete a specific user by ID (protected)
router.delete("/:id", authenticateToken, async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully", result: user });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
});

router.put("/:id", authenticateToken, async (req, res) => {
    try {
        const { useremail, username, usercompany } = req.body;

        // Ensure that we don't accidentally overwrite the password or other sensitive fields without explicit intention.
        const updatedFields = { useremail, username, usercompany };

        // Find the user by ID and update the fields, with { new: true } returning the updated document
        const user = await UserModel.findByIdAndUpdate(req.params.id, updatedFields, { new: true, runValidators: true });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User updated successfully", result: user });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
});

module.exports = router;
