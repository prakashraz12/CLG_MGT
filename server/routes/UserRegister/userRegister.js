const express = require("express");
const UserRegister  = require("../../controller/UserRegister/Register");
const router = express.Router();

router.post("/user-register", UserRegister);

module.exports = router;
