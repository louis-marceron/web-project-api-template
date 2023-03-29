const Book = require('../models/Book');

/**
 * Get all books
 * @async
 * @function
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
exports.getAllBooks = async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
};

/**
 * Get book by ID
 * @async
 * @function
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
exports.getBookById = async (req, res) => {
    const book = await Book.findByPk(req.params.id);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};

/**
 * Create a new book
 * @async
 * @function
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
exports.createBook = async (req, res) => {
    const { title, author } = req.body;

    try {
        const newBook = await Book.create({ title, author });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: 'Error creating book', error });
    }
};

/**
 * Update an existing book
 * @async
 * @function
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
exports.updateBook = async (req, res) => {
    const { title, author } = req.body;
    const bookId = req.params.id;

    try {
        const [updatedRows] = await Book.update({ title, author }, { where: { id: bookId } });

        if (updatedRows > 0) {
            res.status(200).json({ message: 'Book updated successfully' });
        } else {
            res.status(404).json({ message: 'Book not found' });
            // FIXME redirect to the generic error handler
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating book', error });
        // FIXME redirect to the generic error handler
    }
};

/**
 * Delete a book by ID
 * @async
 * @function
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
exports.deleteBook = async (req, res) => {
    const bookId = req.params.id;

    try {
        const deletedRows = await Book.destroy({ where: { id: bookId } });

        if (deletedRows > 0) {
            res.status(200).json({ message: 'Book deleted successfully' });
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error deleting book', error });
    }
};
