const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();
const connectDB = require("./db");
const User = require("./user");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

// Connect to MongoDB
connectDB();

const frontendPath = path.join(__dirname, "../frontend/build");
app.use(express.static(frontendPath));

// API routes
app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.post("/contact", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        console.log("Data saved:", newUser);
        res.status(200).json({
            message: "Data successfully saved",
            data: newUser
        });
    } catch (error) {
        console.error("Error saving to the database:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

// Start the server
app.listen(PORT, () =>
    console.log(`Server is listening at port ${PORT}`)
);
