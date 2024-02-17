const sqlite3 = require('sqlite3').verbose();

// Open a database connection
let db = new sqlite3.Database('./gaming.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the gaming database.');
});

// Create a new table
db.run(`CREATE TABLE IF NOT EXISTS players(
  playerId INTEGER PRIMARY KEY,
  username TEXT NOT NULL,
  playerLevel INTEGER,
  credits INTEGER,
  hours INTEGER
)`, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Table created or already exists.');
  }
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Closed the database connection.');
});