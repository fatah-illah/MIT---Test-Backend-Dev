const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./wedding_guestbook.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the wedding guestbook database.");
});

db.serialize(() => {
  // Create table guests
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

      // Create table admins in callback from table guests
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

          // Closing connection database
          db.close();
        }
      );
    }
  );
});
