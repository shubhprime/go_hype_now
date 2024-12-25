const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const nnodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

// MongoDB connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to the database"))
    .catch((error) => {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit the process with an error code
    });

// Schema
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

const User = mongoose.model("User", userSchema);

// API
app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.post("/contact", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        console.log("Data saved:", newUser);
        // res.status(200).json({
        //     message: "Data successfully saved",
        //     data: newUser
        // });
        
    } catch (error) {
        console.error("Error saving to the database:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

app.listen(PORT, () =>
    console.log(`Server is listening at port ${PORT}`)
);
