import Book from '../models/Book.js'

export async function getAllBooks(_req, res) {
    const books = await Book.findAll()
    res.json(books)
}

export async function getBookById(req, res) {
    const book = await Book.findByPk(req.params.id)

    if (book) {
        res.json(book)
    } else {
        res.status(404).json({ message: 'Book not found' })
    }
}

export async function createBook(req, res) {
    const { title, author } = req.body

    try {
        const newBook = await Book.create({ title, author })
        res.status(201).json(newBook)
    } catch (error) {
        res.status(400).json({ message: 'Error creating book', error })
    }
}

export async function updateBook(req, res) {
    const { title, author } = req.body
    const bookId = req.params.id

    try {
        const [updatedRows] = await Book.update({ title, author }, { where: { id: bookId } })

        if (updatedRows > 0) {
            res.status(200).json({ message: 'Book updated successfully' })
        } else {
            res.status(404).json({ message: 'Book not found' })
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating book', error })
    }
}

export async function deleteBook(req, res) {
    const bookId = req.params.id

    try {
        const deletedRows = await Book.destroy({ where: { id: bookId } })

        if (deletedRows > 0) {
            res.status(200).json({ message: 'Book deleted successfully' })
        } else {
            res.status(404).json({ message: 'Book not found' })
        }
    } catch (error) {
        res.status(400).json({ message: 'Error deleting book', error })
    }
}
