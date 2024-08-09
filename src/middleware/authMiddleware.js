// src/middleware/authMiddleware.js
const { validateJwt } = require('../utils/auth');

function authenticateToken(req, res, next) {
    const token = req.cookies.jwtToken || req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No Token Provided.' });
    }

    try {
        const decoded = validateJwt(token);
        req.user = decoded; // Add the decoded token to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        res.status(403).json({ message: 'Invalid Token' });
    }
}

module.exports = authenticateToken;
