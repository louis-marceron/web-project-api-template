const Book = require('../models/Book');

let books = [
    new Book(1, 'The Catcher in the Rye', 'J.D. Salinger'),
    new Book(2, 'To Kill a Mockingbird', 'Harper Lee'),
    new Book(3, '1984', 'George Orwell'),
];

/**
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
exports.getAllBooks = (req, res) => {
    res.json(books);
};

/**
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
exports.getBookById = (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b) => b.id === bookId);

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
};

/**
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
exports.createBook = (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
    };

    books.push(newBook);
    res.status(201).json(newBook);
};

/**
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
exports.updateBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex((b) => b.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }

    const updatedBook = {
        id: bookId,
        title: req.body.title,
        author: req.body.author,
    };

    books[bookIndex] = updatedBook;
    res.json(updatedBook);
};

/**
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
exports.deleteBook = (req, res) => {
    const bookId = parseInt(req.params.id);

    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
        res.status(404).json({ message: 'Book not found' });
    } else {
        books.splice(bookIndex, 1);
        res.status(200).json({ message: 'Book deleted successfully' });
    }
};
