const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

// Route for add new admin
router.post("/register", authMiddleware, adminController.register);

// Route for login
router.post("/login", adminController.login);

// Route for get all
router.get("/manage", authMiddleware, adminController.getAllGuests);

// Route for get by id
router.get("/manage/:id", authMiddleware, adminController.getGuestById);

// Route for update by id
router.put("/manage/:id", authMiddleware, adminController.updateGuest);

// Route for delete by id
router.delete("/manage/:id", authMiddleware, adminController.deleteGuest);

module.exports = router;
