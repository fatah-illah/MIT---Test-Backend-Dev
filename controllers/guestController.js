const Guest = require("../models/Guest");

const guestController = {
  addGuest: (req, res) => {
    // Ambil data dari request
    const { name, address, phone, note } = req.body;

    // Simpan data ke database
    Guest.add({ name, address, phone, note }, (err) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(201).send("Guest added successfully");
      }
    });
  },

  getNotes: (req, res) => {
    Guest.getAll((err, guests) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        // Hanya kirimkan nama dan catatan
        const notes = guests.map((guest) => ({ name: guest.name, note: guest.note }));
        res.status(200).json(notes);
      }
    });
  },
};

module.exports = guestController;
