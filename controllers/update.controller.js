const db = require('../db');

function updateAuthor(author) {
    return db.databaseTransaction('UPDATE author SET firstname = ?, lastname = ? WHERE idauthor = ?', [author.firstname, author.lastname , author.id]);
}

function updateBook(book) {
    return db.databaseTransaction('UPDATE books SET title = ?, description = ? WHERE idbooks = ?', [book.title, book.description, book.id]);
}

module.exports.updateAuthor = updateAuthor;
module.exports.updateBook = updateBook;