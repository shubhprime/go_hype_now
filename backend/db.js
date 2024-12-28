const mongoose = require("mongoose");
const dotenv = require('dotenv').config();

// MongoDB connection
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to the database");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit the process with an error code
    }
};

module.exports = connectDB;
