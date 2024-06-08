const express = require('express');
const router = express.Router();
const studentController = require('../app/controllers/studentController');

router.get('/', studentController.getAllStudents);

// url page create
router.get('/create', studentController.createForm);

// url post create => render to page get all 
router.post('/', studentController.createStudent);

// url page edit get student need update 
router.get('/:id/edit', studentController.editForm);

// url post edit 
router.post('/:id', studentController.updateStudent);

router.post('/:id/delete', studentController.deleteStudent);

module.exports = router;


