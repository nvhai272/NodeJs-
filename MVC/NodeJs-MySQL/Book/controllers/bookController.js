const Book = require('../models/book');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.render('index', { books });
    } catch(err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        res.render('show', { book });
    } catch(err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
};

exports.renderCreateBook = async (req, res) => {
    res.render('create');
};

exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.redirect(`/books`);
    } catch(error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.renderEditBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        res.render('edit', { book });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.updateBook = async (req, res) => {
    try {
        await Book.update(req.body, {
            where: { id: req.params.id } 
        });
        res.redirect('/books');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.deleteBook = async (req, res) => {
    try {
        await Book.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/books');
    } catch (err){
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
};
