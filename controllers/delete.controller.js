const db = require('../db');

function deleteAuthor(id) {
    return db.databaseTransaction('DELETE FROM author WHERE idauthor = ?', [id]);
}

function deleteBook(id) {
    return db.databaseTransaction('DELETE FROM author WHERE idbooks = ?', [id]);
}

module.exports.deleteAuthor = deleteAuthor;
module.exports.deleteBook = deleteBook;