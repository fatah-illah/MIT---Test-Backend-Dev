const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./wedding_guestbook.db");

class Guest {
  // Menambahkan data baru untuk tabel guests
  static add({ name, address, phone, note }, callback) {
    const sql = `INSERT INTO guests (name, address, phone, note) VALUES (?, ?, ?, ?)`;
    db.run(sql, [name, address, phone, note], (err) => {
      callback(err);
    });
  }

  // Menampilkan data dari tabel guests yang sudah difilter hanya atribut name & note saja
  static getAll(callback) {
    const sql = `SELECT name, note FROM guests`;
    db.all(sql, [], (err, rows) => {
      callback(err, rows);
    });
  }
}

module.exports = Guest;
