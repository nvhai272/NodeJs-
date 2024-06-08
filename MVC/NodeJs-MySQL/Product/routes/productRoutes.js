const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/products/create', productController.createProduct);
router.post('/products', productController.saveProduct);
router.get('/products/:id', productController.getProductById);
router.get('/products/:id/edit', productController.editProduct);
router.post('/products/:id', productController.updateProduct);
router.post('/products/:id/delete', productController.deleteProduct);

module.exports = router;

