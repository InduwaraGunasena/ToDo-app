const express = require("express");
const connectDB = require("./src/configs/mongoDB");
const taskRoutes = require("./src/routes/todoRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

connectDB(); // Connect to the database

app.use("/api", taskRoutes); // Set up API routes

module.exports = app;
