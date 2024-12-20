const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/getEmployee', employeeController.getAllEmployees);
router.get('/get/:id', employeeController.getEmployeeById);
router.post('/create', employeeController.createEmployee);
router.put('/update/:id', employeeController.updateEmployee);
router.delete('/delete/:id', employeeController.deleteEmployee);
router.get('/adminCount', employeeController.getAdminCount);
router.get('/employeeCount', employeeController.getEmployeeCount);
router.get('/salary', employeeController.getTotalSalary);

module.exports = router;
