const db = require('../db');

function createAuthor(author) {
    return db.databaseTransaction('INSERT INTO author SET ?', author);
}

function createBook(book) {
    return db.databaseTransaction('INSERT INTO books SET ?', book);
}

module.exports.createAuthor = createAuthor;
module.exports.createBook = createBook;