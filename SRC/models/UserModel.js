// src/models/UserModel.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the schema for the user model
const userSchema = mongoose.Schema({
    useremail: {
        type: String,
        required: true,
        unique: true // Ensure emails are unique
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    username: {
        type: String,
        required: true,
        unique: false
    },
    usercompany: {
        type: String,
        required: true,
        unique: false
    },
    // Stretch goal: create a user log where it shows what the user has done.
    // Thinking of doing this by collecting the data of each edit from data type and storing it all here
});

// Pre-save hook to hash passwords
userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

// Create and export the User model based on the schema
const UserModel = mongoose.model("User", userSchema);

module.exports = {
    UserModel
};
