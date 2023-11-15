const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./wedding_guestbook.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the wedding guestbook database.");
});

db.serialize(() => {
  // Membuat tabel guests
  db.run(
    `CREATE TABLE IF NOT EXISTS guests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        address TEXT,
        phone TEXT,
        note TEXT
    )`,
    (err) => {
      if (err) {
        console.error(err.message);
      }

      // Membuat tabel admins di dalam callback dari tabel guests
      db.run(
        `CREATE TABLE IF NOT EXISTS admins (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT NOT NULL,
          password TEXT NOT NULL
        )`,
        (err) => {
          if (err) {
            console.error(err.message);
          }

          // Penutupan koneksi database
          db.close();
        }
      );
    }
  );
});

// Menampilkan isi tabel guests
// db.serialize(() => {
//   db.each("SELECT * FROM guests", (err, row) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log(row);
//   });
// });

// Menampilkan isi tabel admins
// db.serialize(() => {
//   db.each("SELECT * FROM admins", (err, row) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log(row);
//   });
// });

// db.close();
