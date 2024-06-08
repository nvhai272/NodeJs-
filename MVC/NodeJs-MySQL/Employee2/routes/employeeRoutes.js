const express = require('express');
const routes = express.Router();
const employeeController = require('../controllers/employeeController');

routes.get('/', employeeController.getAll);
routes.get('/create', employeeController.formCreate);
routes.get('/:id', employeeController.getOneById);
routes.post('/', employeeController.postCreate);
routes.get('/:id/edit', employeeController.formUpdate);
routes.post('/:id', employeeController.postUpdate);
routes.post('/:id/delete', employeeController.delete);

module.exports = routes;