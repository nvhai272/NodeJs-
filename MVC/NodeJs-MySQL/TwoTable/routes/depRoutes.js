const express = require('express');
const routes = express.Router();
const depController = require('../controllers/departmentController');

routes.get('/', depController.getAllDepartments);
routes.get('/create', depController.formCreate);
routes.get('/:id', depController.getOneById);
routes.post('/', depController.postCreate);
routes.get('/:id/edit', depController.formUpdate);
routes.post('/:id', depController.postUpdate);
routes.post('/:id/delete', depController.postDelete);

module.exports = routes;