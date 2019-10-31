const db = require('../db');

function deleteAuthor(id) {
    return db.databaseTransaction('DELETE FROM author WHERE idauthor = ?', [id]);
}

function deleteBook(id) {
    return db.databaseTransaction('DELETE FROM books WHERE idbooks = ?', [id]);
}

function unJoinBookFromAuthor (book_id) {
    return db.databaseTransaction('DELETE FROM author_has_books WHERE books_idbooks = ?', book_id);
}

function unJoinAuthorFromBook (author_id) {
    return db.databaseTransaction('DELETE FROM author_has_books WHERE author_idauthor = ?', author_id);
}

module.exports.deleteAuthor = deleteAuthor;
module.exports.deleteBook = deleteBook;
module.exports.unJoinBookFromAuthor = unJoinBookFromAuthor;
module.exports.unJoinAuthorFromBook = unJoinAuthorFromBook;