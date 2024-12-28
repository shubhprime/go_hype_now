const mongoose = require("mongoose");

// Define User schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
    },
    company: String,
    phone: Number,
    query: String,
});

// Create User model
const User = mongoose.model("User", userSchema);

module.exports = User;
