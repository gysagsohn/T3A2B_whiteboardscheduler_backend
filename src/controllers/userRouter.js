// src/controllers/userRouter.js
const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/', protect, getUserProfile);

module.exports = router;
