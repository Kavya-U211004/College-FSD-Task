const employeeModel = require('../models/employeeModel');

// Function to get admin count
const getAdminCount = (req, res) => {
  employeeModel.getAdminCount(req, res);
};

// Function to get employee count
const getEmployeeCount = (req, res) => {
  employeeModel.getEmployeeCount(req, res);
};

// Function to get total salary
const getTotalSalary = (req, res) => {
  employeeModel.getTotalSalary(req, res);
};

// Function to get all employees
const getAllEmployees = (req, res) => {
  employeeModel.getAllEmployees((err, result) => {
    if (err) return res.json({ Error: "Error in fetching employees" });
    return res.json({ Status: "Success", Result: result });
  });
};


// Function to get employee by ID
const getEmployeeById = (req, res) => {
  const id = req.params.id;
  employeeModel.getEmployeeById(id, (err, result) => {
    if (err) return res.json({ Error: "Error in fetching employee" });
    return res.json({ Status: "Success", Result: result });
  });
};

// Function to create new employee
const createEmployee = (req, res) => {
  const employeeData = req.body;
  employeeModel.createEmployee(employeeData, (err, result) => {
    if (err) return res.json({ Error: "Error in creating employee" });
    return res.json({ Status: "Success", Result: result });
  });
};

// Function to update employee
const updateEmployee = (req, res) => {
  const id = req.params.id;
  const employeeData = req.body;
  employeeModel.updateEmployee(id, employeeData, (err, result) => {
    if (err) return res.json({ Error: "Error in updating employee" });
    return res.json({ Status: "Success", Result: result });
  });
};

// Function to delete employee
const deleteEmployee = (req, res) => {
  const id = req.params.id;
  employeeModel.deleteEmployee(id, (err, result) => {
    if (err) return res.json({ Error: "Error in deleting employee" });
    return res.json({ Status: "Success", Result: result });
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
