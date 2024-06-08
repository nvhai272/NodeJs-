class Product {
    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }

    static getAll() {
        return products;
    }

    static getById(id) {
        return products.find(p => p.id === id);
    }

    static create(product) {
        products.push(product);
    }

    static deleteById(id) {
        products = products.filter(p => p.id !== id);
    }

    static updateById(id, updatedProduct) {
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
            products[index] = { id, ...updatedProduct };
        }
    }
}

let products = [
    new Product(1, 'Product 1', 100, 'Description 1'),
    new Product(2, 'Product 2', 200, 'Description 2'),
    new Product(3, 'Product 3', 300, 'Description 3')
];
module.exports = Product;
