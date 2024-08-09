const { validateJwt, decodeJwt } = require('../utils/auth');

const authenticateToken = (req, res, next) => {
    // Extract the JWT token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: 'Token is missing' });
    }

    try {
        validateJwt(token); // Validate the token
        const decodedToken = decodeJwt(token); // Decode the token to get user info
        req.user = decodedToken; // Attach the decoded token to the request object
        next(); // Continue to the next middleware or route handler
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

module.exports = authenticateToken;
