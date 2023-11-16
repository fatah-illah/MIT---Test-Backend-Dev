const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./wedding_guestbook.db");
const bcrypt = require("bcrypt");

class Admin {
  static addNewAdmin({ username, password }, callback) {
    // Hash password before save
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return callback(err);
      }

      const sql = `INSERT INTO admins (username, password) VALUES (?, ?)`;
      db.run(sql, [username, hash], (err) => {
        callback(err);
      });
    });
  }

  static authenticate({ username, password }, callback) {
    const sql = `SELECT * FROM admins WHERE username = ?`;
    db.get(sql, [username], (err, admin) => {
      if (err) {
        return callback(err);
      }
      if (admin) {
        // Compare hashed password
        bcrypt.compare(password, admin.password, (err, result) => {
          if (result) {
            callback(null, admin);
          } else {
            callback("Authentication failed");
          }
        });
      } else {
        callback("Authentication failed");
      }
    });
  }
}

module.exports = Admin;
