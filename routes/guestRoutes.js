const express = require("express");
const router = express.Router();
const guestController = require("../controllers/guestController");

// Rute untuk menambahkan tamu
router.post("/add", guestController.addGuest);

// Rute untuk menampilkan note gallery
router.get("/notes", guestController.getNotes);

module.exports = router;
