const express = require('express');
const router = express.Router();
const depController = require('../controllers/depController');

router.get('/', depController.getDepartments);
router.get('/create', depController.formCreateDepartment);
router.get('/:id', depController.getDepartment);
router.get('/:id/edit', depController.formEditDepartment);

router.post('/', depController.createDepartment);
router.post('/:id', depController.editDepartment);
router.post('/:id/delete', depController.deleteDepartment);

module.exports = router;