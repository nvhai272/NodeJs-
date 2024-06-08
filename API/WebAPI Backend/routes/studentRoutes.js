const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.GetAllStudents);
router.post('/', studentController.CreateStudent);
router.put('/:id', studentController.UpdateStudent);
router.delete('/:id', studentController.DeleteStudentById);
router.get('/:id', studentController.GetStudentById);

module.exports = router;