const Guest = require("../models/Guest");

const guestController = {
  addGuest: (req, res) => {
    // Take data from request
    const { name, address, phone, note } = req.body;

    // Save data to database
    Guest.add({ name, address, phone, note }, (err) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(201).send("Guest added successfully");
      }
    });
  },

  getNotes: (req, res) => {
    Guest.getAllFilter((err, guests) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        // Just send name and notes
        const notes = guests.map((guest) => ({ name: guest.name, note: guest.note }));
        res.status(200).json(notes);
      }
    });
  },
};

module.exports = guestController;
