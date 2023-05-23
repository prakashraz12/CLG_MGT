const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./dataBase/index");
const studentRoutes = require("./routes/Student/student");
const userRoutes = require("./routes/UserRegister/userRegister");
const userLogin = require("./routes/UserRegister/login");

const app = express();

// Middleware for parsing JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/students", studentRoutes);
app.use("/user", userRoutes);
app.use("/user", userLogin);

// Connect to the database
connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
    // Start your application or perform other operations
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
