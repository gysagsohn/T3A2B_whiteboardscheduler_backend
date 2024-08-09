
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

// Generate a JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: '7d' });
};

// Register new user
const registerUser = async (req, res) => {
    const { useremail, password, username, usercompany } = req.body;

    const userExists = await User.findOne({ useremail });

    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
        useremail,
        password,
        username,
        usercompany,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            useremail: user.useremail,
            username: user.username,
            usercompany: user.usercompany,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
};

// Log in user
const loginUser = async (req, res) => {
    const { useremail, password } = req.body;

    const user = await User.findOne({ useremail });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            useremail: user.useremail,
            username: user.username,
            usercompany: user.usercompany,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
};

// Get user profile
const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
};

module.exports = { registerUser, loginUser, getUserProfile };
