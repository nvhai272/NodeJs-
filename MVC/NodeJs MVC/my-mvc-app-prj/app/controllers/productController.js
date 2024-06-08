const Product = require('../models/productModel');

// get all products
exports.index = (req, res) => {
  const products = Product.getAll();
  res.render('products/index', { products });
};

// get one
exports.show = (req, res) => {
  const product = Product.getById(parseInt(req.params.id));
  if (product) {
    // res.render('products/show', { product });
    res.json(product); //trả về JSON thay vì render view 
  } else {
    res.status(404).send('Product not found');
  }
};

// get create
exports.createForm = (req, res) => {
  res.render('products/create');
};

// post create
exports.create = (req, res) => {
  const { name, price, description } = req.body;
  const products = Product.getAll();
  const id = products.length ? products[products.length - 1].id + 1 : 1;
  const newProduct = new Product(id, name, parseFloat(price), description);
  Product.create(newProduct);
  res.redirect('/products');
};


// get edit
exports.editForm = (req, res) => {
  const product = Product.getById(parseInt(req.params.id));
  if (product) {
    res.render('products/edit', { product });
  } else {
    res.status(404).send('Product not found');
  }
};

// post edit
exports.update = (req, res) => {
  const { name, price, description } = req.body;
  const updatedProduct = { name, price: parseFloat(price), description };
  Product.updateById(parseInt(req.params.id), updatedProduct);
  res.redirect('/products');
};

// post delete
exports.delete = (req, res) => {
  Product.deleteById(parseInt(req.params.id));
  res.redirect('/products');
};