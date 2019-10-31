const db = require('../db');

function findAllAuthors() {
    return db.databaseTransaction(`SELECT * FROM author;`);
}

function findOneAuthor(id) {
    return db.databaseTransaction(`SELECT * FROM author WHERE idauthor = ?;`, [id]);
}

function findAllBooks() {
    return db.databaseTransaction(`SELECT * FROM books;`);
}

function findOneBook(id) {
    return db.databaseTransaction(`SELECT * FROM books WHERE idbooks = ?;`, [id]);
}

module.exports.findOneAuthor = findOneAuthor;
module.exports.findOneBook = findOneBook;
module.exports.findAllAuthors = findAllAuthors;
module.exports.findAllBooks = findAllBooks;