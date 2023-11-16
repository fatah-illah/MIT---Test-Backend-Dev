const Admin = require("../models/Admin");
const Guest = require("../models/Guest");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const adminController = {
  register: (req, res) => {
    const { username, password } = req.body;

    Admin.addNewAdmin({ username, password }, (err) => {
      if (err) {
        res.status(500).send("Error creating new admin");
      } else {
        res.status(201).send("New admin created successfully");
      }
    });
  },

  login: (req, res) => {
    const { username, password } = req.body;

    Admin.authenticate({ username, password }, (err, admin) => {
      if (err) {
        res.status(500).send("Error during authentication");
      } else if (admin) {
        // Create JWT token if authenticate success
        const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
        res.status(200).json({ token });
      } else {
        res.status(401).send("Invalid credentials");
      }
    });
  },

  logout: (req, res) => {
  res.status(200).send("Logout successful. Please delete your token.");
  },


  getAllGuests: (req, res) => {
    Guest.getAll((err, guests) => {
      if (err) {
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(guests);
      }
    });
  },

  getGuestById: (req, res) => {
    const id = req.params.id;

    Guest.getById(id, (err, guest) => {
      if (err) {
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(guest);
      }
    });
  },

  updateGuest: (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    Guest.updateById(id, updatedData, (err, result) => {
      if (err) {
        res.status(500).send("Error updating data");
      } else {
        res.status(200).json({ message: "Guest updated successfully", id: result.id });
      }
    });
  },

  deleteGuest: (req, res) => {
    const id = req.params.id;

    Guest.deleteById(id, (err) => {
      if (err) {
        res.status(500).send("Error deleting data");
      } else {
        res.status(200).json({ message: "Guest deleted successfully" });
      }
    });
  },
};

module.exports = adminController;
