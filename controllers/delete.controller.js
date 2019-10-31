const db = require('../db');

function deleteAuthor(id) {
    console.log(id);
    return db.databaseTransaction('DELETE FROM author WHERE idauthor = ?', [id]);
}

function deleteBook(id) {
    return db.databaseTransaction('DELETE FROM books WHERE idbooks = ?', [id]);
}

module.exports.deleteAuthor = deleteAuthor;
module.exports.deleteBook = deleteBook;