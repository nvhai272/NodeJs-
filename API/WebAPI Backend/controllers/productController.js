let products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100, category: 'Category 1', stock: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200, category: 'Category 2', stock: 20 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 300, category: 'Category 3', stock: 30 }
];

// Create a new product
exports.createProduct = (req, res) => {
    const product = {
        id: products.length + 1,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        stock: req.body.stock
    };
    products.push(product);
    res.status(201).send(product);
};

// Read all products
exports.getAllProducts = (req, res) => {
    res.status(200).send(products);
};

// Read a product by ID
exports.getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).send('Product not found');
    }
    res.status(200).send(product);
};

// Update a product by ID
exports.updateProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).send('Product not found');
    }
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    product.category = req.body.category;
    product.stock = req.body.stock;
    res.status(200).send(product);
};

// Delete a product by ID
exports.deleteProductById = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) {
        return res.status(404).send('Product not found');
    }
    const product = products.splice(productIndex, 1);
    res.status(200).send(product);
};