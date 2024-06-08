const express = require('express');
const routes = express.Router();
const empController = require('../controllers/employeeController');

routes.get('/', empController.getAllEmployees);
routes.get('/create', empController.formCreate);
routes.get('/:id', empController.getOneById);
routes.post('/', empController.postCreate);
routes.get('/:id/edit', empController.formUpdate);
routes.post('/:id', empController.postUpdate);
routes.get('/:id/delete', empController.delete);

module.exports = routes;