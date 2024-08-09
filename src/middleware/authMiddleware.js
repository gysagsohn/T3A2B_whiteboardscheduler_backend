// src/middleware/authMiddleware.js
const { validateJwt } = require('../utils/auth');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token missing in authorization header' });
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