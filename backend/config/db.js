require('dotenv').config();

const mysql = require('mysql');

// Create a MySQL connection
const con = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// Connect to the database
con.connect(function(err) {
  if (err) {
    console.log("Error in Connection:", err);
    return;
  }
  console.log("Connected to the database!");
});

module.exports = con;
