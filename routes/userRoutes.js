const express = require("express");
const { getUsers, createUser, loginUser } = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getUsers); // Protecting users list
router.post("/", createUser); // Allow user creation without authentication
router.post("/login", loginUser); // Login route to get a token

module.exports = router;
