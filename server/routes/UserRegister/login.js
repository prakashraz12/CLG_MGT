const express = require('express');
const { UserLogin } = require("../../controller/UserRegister/Login");

const router = express.Router();

// Define the login route
router.post('/login', UserLogin);

module.exports = router;
