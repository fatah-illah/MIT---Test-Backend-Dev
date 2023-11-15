const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

// Rute untuk menambah admin baru
router.post("/register", authMiddleware, adminController.register);

// Rute untuk login
router.post("/login", adminController.login);

// Rute untuk get all
router.get("/manage", authMiddleware, adminController.getAllGuests);

// Rute untuk get by id
router.get("/manage/:id", authMiddleware, adminController.getGuestById);

// Rute untuk update by id
router.put("/manage/:id", authMiddleware, adminController.updateGuest);

// Rute untuk delete by id
router.delete("/manage/:id", authMiddleware, adminController.deleteGuest);

module.exports = router;
