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
  static getAllFilter(callback) {
    const sql = `SELECT name, note FROM guests`;
    db.all(sql, [], (err, rows) => {
      callback(err, rows);
    });
  }

  // Menampilkan semua data dari tabel guests
  static getAll(callback) {
    const sql = `SELECT * FROM guests`;
    db.all(sql, [], (err, rows) => {
      callback(err, rows);
    });
  }

  // Menampilkan data berdasarkan id
  static getById(id, callback) {
    const sql = `SELECT * FROM guests WHERE id = ?`;
    db.get(sql, [id], (err, row) => {
      callback(err, row);
    });
  }

  // Update by id
  static updateById(id, newData, callback) {
    const { name, address, phone, note } = newData;
    const sql = `UPDATE guests SET name = ?, address = ?, phone = ?, note = ? WHERE id = ?`;
    db.run(sql, [name, address, phone, note, id], function (err) {
      callback(err, { id: this.lastID });
    });
  }

  // Delete by id
  static deleteById(id, callback) {
    const sql = `DELETE FROM guests WHERE id = ?`;
    db.run(sql, [id], function (err) {
      callback(err);
    });
  }
}

module.exports = Guest;
