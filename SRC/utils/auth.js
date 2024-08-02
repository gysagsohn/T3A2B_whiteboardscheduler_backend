// src/utils/auth.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Compare raw password to encrypted password
async function comparePasswords(plaintextPassword, encryptedPassword) {
    return await bcrypt.compare(plaintextPassword, encryptedPassword);
}

// Create a JWT
function createJwt(userId) {
    return jwt.sign(
        { id: userId },
        process.env.JWT_KEY,
        { expiresIn: "7d" }
    );
}

// Validate a JWT
function validateJwt(jwtToValidate) {
    try {
        const decodedJwt = jwt.verify(jwtToValidate, process.env.JWT_KEY);
        console.log("Decoded JWT data:", decodedJwt);
        return true;
    } catch (error) {
        throw new Error("User JWT is not valid!");
    }
}

// Decode a JWT
function decodeJwt(jwtToDecode) {
    return jwt.verify(jwtToDecode, process.env.JWT_KEY);
}

module.exports = {
    comparePasswords,
    createJwt,
    validateJwt,
    decodeJwt
};
