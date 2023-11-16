const express = require("express");
const router = express.Router();
const guestController = require("../controllers/guestController");

// Route for add new guests data
router.post("/add", guestController.addGuest);

// Route for get note gallery
router.get("/notes", guestController.getNotes);

module.exports = router;
