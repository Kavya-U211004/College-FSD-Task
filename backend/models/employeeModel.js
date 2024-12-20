const con = require('../config/db');

// Function to get admin count
const getAdminCount = (req, res) => {
  console.log("Fetching admin count...");
  const sql = "SELECT COUNT(id) AS admin FROM users";
  con.query(sql, (err, result) => {
    if (err) {
      console.log("Error in fetching admin count", err);
      return res.status(500).json({ Error: "Error in running query" });
    }
    console.log("Admin count fetched successfully:", result);
    return res.json(result);
  });
};

// Function to get employee count
const getEmployeeCount = (req, res) => {
  console.log("Fetching employee count...");
  const sql = "SELECT COUNT(id) AS employee FROM employee";
  con.query(sql, (err, result) => {
    if (err) {
      console.log("Error in fetching employee count", err);
      return res.status(500).json({ Error: "Error in running query" });
    }
    console.log("Employee count fetched successfully:", result);
    return res.json(result);
  });
};

// Function to get total salary
const getTotalSalary = (req, res) => {
  console.log("Fetching total salary...");
  const sql = "SELECT SUM(salary) AS sumOfSalary FROM employee";
  con.query(sql, (err, result) => {
    if (err) {
      console.log("Error in fetching total salary", err);
      return res.status(500).json({ Error: "Error in running query" });
    }
    console.log("Total salary fetched successfully:", result);
    return res.json(result);
  });
};

// Function to get all employees
const getAllEmployees = (callback) => {
  const sql = "SELECT * FROM employee";
  con.query(sql, (err, result) => {
    if (err) {
      console.log("Error in fetching employees:", err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

// Function to get employee by ID
const getEmployeeById = (id, callback) => {
  const sql = "SELECT * FROM employee WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) {
      console.log("Error in fetching employee:", err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

// Function to create a new employee
const createEmployee = (employeeData, callback) => {
  const { name, email, address, salary } = employeeData;
  const sql = "INSERT INTO employee (name, email, address, salary) VALUES (?, ?, ?, ?)";
  con.query(sql, [name, email, address, salary], (err, result) => {
    if (err) {
      console.log("Error in creating employee:", err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

// Function to update employee
const updateEmployee = (id, employeeData, callback) => {
  const { name, email, salary, address } = employeeData;
  const sql = "UPDATE employee SET `name`= ?, `email`= ?, `salary`= ?, `address`= ? WHERE id = ?";
  con.query(sql, [name, email, salary, address, id], (err, result) => {
    if (err) {
      console.log("Error in updating employee:", err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

// Function to delete employee
const deleteEmployee = (id, callback) => {
  const sql = "DELETE FROM employee WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) {
      console.log("Error in deleting employee:", err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getAdminCount,
  getEmployeeCount,
  getTotalSalary
};
