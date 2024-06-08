const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.render('index', { products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.render('show', { product });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.createProduct = async (req, res) => {
  res.render('create');
};

exports.saveProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.redirect('/');
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.editProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.render('edit', { product });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: { id: req.params.id }
    });
    res.redirect('/');
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: { id: req.params.id }
    });
    res.redirect('/');
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).send('Internal Server Error');
  }
};

