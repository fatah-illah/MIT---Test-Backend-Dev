const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const adminController = {
  login: (req, res) => {
    // Mengambil username dan password dari request
    const { username, password } = req.body;

    // Membuat token JWT dengan kunci rahasia dari variabel lingkungan
    const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

    // Memanggil metode autentikasi pada model Admin
    Admin.authenticate({ username, password }, (err, admin) => {
      if (err) {
        res.status(500).send("Error during authentication");
      } else if (admin) {
        // Membuat token JWT jika autentikasi berhasil
        const token = jwt.sign({ id: admin.id }, "your_secret_key", { expiresIn: "1h" });
        res.status(200).json({ token });
      } else {
        res.status(401).send("Invalid credentials");
      }
    });
  },
};

module.exports = adminController;
