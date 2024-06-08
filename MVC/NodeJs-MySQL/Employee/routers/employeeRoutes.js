const express = require('express');
const route = express.Router();
const employeeController = require('../controllers/employeeController');

route.get('/', employeeController.getAllEmployees);

route.get('/create', employeeController.createEmployee);

route.get('/:id', employeeController.getEmployeeById);

route.post('/', employeeController.postEmployee);

route.get('/:id/edit', employeeController.editEmployee);

route.post('/:id', employeeController.updateEmployee);

route.get('/:id/delete', employeeController.deleteEmployee);

module.exports = route;