const express = require("express");
const router = express.Router();
const login = require("../controllers/Auth/Admin/login")
const register = require("../controllers/Auth/Admin/register")



router.post("/register", register);
router.post("/login", login);

module.exports = router;
