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

// Hash the password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Create and export the User model based on the schema
const UserModel = mongoose.model("User", userSchema);

module.exports = {
    UserModel
};
