const express = require("express");
const router = express.Router();
const { registerStudent } = require("../../controller/Student/Registration");

// POST route for student registration
router.post("/register", registerStudent);

module.exports = router;
