// src/middleware/authMiddleware.js
const { validateJwt } = require('../utils/auth');

const authenticateToken = (req, res, next) => {
    const token = req.cookies.jwtToken;  // Extract the JWT token from cookies
    if (!token) {
        return res.status(401).json({ message: 'Token is missing in cookies' });
    }

    try {
        const decodedToken = validateJwt(token);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};


module.exports = authenticateToken;
