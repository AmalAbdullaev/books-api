const db = require('../db');

function createAuthor(firstname, lastname) {
    return db.databaseTransaction('INSERT INTO author SET (firstname, lastname) VALUES ( ?, ?)', [firstname, lastname]);
}

function createBook(title, description) {
    return db.databaseTransaction('INSERT INTO books SET (title, description) VALUES ( ?, ?)', [title, description]);
}

module.exports.createAuthor = createAuthor;
module.exports.createBook = createBook;