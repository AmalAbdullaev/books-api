const db = require('../db');

function createAuthor(author) {
    return db.databaseTransaction('INSERT INTO author SET ?', author);
}

function createBook(book) {
    return db.databaseTransaction('INSERT INTO books SET ?', book);
}

function joinBookToAuthor (params) {
    return db.databaseTransaction('INSERT INTO author_has_books SET ?', params);
}


module.exports.createAuthor = createAuthor;
module.exports.createBook = createBook;
module.exports.joinBookToAuthor = joinBookToAuthor;