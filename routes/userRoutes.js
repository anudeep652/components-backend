const express = require("express");
const login = require("../controllers/userController");
const { signIn, signUp } = require("../controllers/userController");
const router = express.Router();

router.post("/login", login);

module.exports = router;
