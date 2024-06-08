const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);
router.get('/create', bookController.renderCreateBook);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.get('/:id/edit', bookController.renderEditBook);
router.post('/:id', bookController.updateBook);
router.post('/:id/delete', bookController.deleteBook);

module.exports = router;
