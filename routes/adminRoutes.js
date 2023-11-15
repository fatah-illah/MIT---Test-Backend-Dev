const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Rute untuk login
router.post("/login", adminController.login);

// Rute untuk manajemen
router.get("/manage", adminController.manageData);

module.exports = router;
