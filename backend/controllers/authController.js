const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const con = require('../config/db');

// Function to handle user registration
const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO users (`name`,`email`,`password`) VALUES (?)";

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.log("Error in hashing password:", err);
      return res.json({ Error: "Error hashing password" });
    }

    const values = [name, email, hash];

    con.query(sql, [values], (err, result) => {
      if (err) {
        console.log("Error in query during registration:", err);
        return res.json({ Error: "Error query" });
      }
      console.log("User registered successfully");
      return res.json({ Status: "Success" });
    });
  });
};

// Function to handle user login
const loginUser = (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  con.query(sql, [req.body.email], (err, result) => {
    if (err) {
      console.log("Error in running query:", err);
      return res.json({ Status: "Error", Error: "Error in running query" });
    }

    if (result.length > 0) {
      bcrypt.compare(req.body.password.toString(), result[0].password, (err, response) => {
        if (err) {
          console.log("Password error:", err);
          return res.json({ Error: "Password error" });
        }

        if (response) {
          const token = jwt.sign({ role: "admin" }, "jwt-secret-key", { expiresIn: '1d' });
          return res.json({ Status: "Success", Token: token });
        } else {
          return res.json({ Status: "Error", Error: "Wrong Email or Password" });
        }
      });
    } else {
      return res.json({ Status: "Error", Error: "Wrong Email or Password" });
    }
  });
};

// Function to get user profile
const getUserProfile = (req, res) => {
  const userId = req.user.id; // Assuming the user ID is stored in the JWT token or session
  
  const sql = "SELECT id, name, email FROM users WHERE id = ?";
  con.query(sql, [userId], (err, result) => {
    if (err) {
      console.log("Error in fetching user profile:", err);
      return res.status(500).json({ Error: "Error fetching profile" });
    }
    if (result.length === 0) {
      return res.status(404).json({ Error: "User not found" });
    }
    return res.json(result[0]); // Return the first user result
  });
};


module.exports = {
  registerUser,
  loginUser,
  getUserProfile
};
