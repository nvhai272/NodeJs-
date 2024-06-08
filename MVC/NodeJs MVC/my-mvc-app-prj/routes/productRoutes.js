const express = require('express');
const router = express.Router();
const productController = require("../app/controllers/productController");

//Routes for the product

router.get('/', productController.index);
router.get('/create', productController.createForm);

router.post('/', productController.create);
router.get('/:id', productController.show);
router.get('/:id/edit', productController.editForm);
router.post('/:id', productController.update);
router.post('/:id/delete', productController.delete);

module.exports = router;

