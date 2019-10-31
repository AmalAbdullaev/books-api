const db = require('../db');

function updateAuthor(id, firstname, lastname) {
    return db.databaseTransaction('UPDATE author SET firstname = ?, lastname = ? WHERE idauthor = ?', [firstname, lastname , id]);
}

function updateBook(id, title, description) {
    return db.databaseTransaction('UPDATE books SET title = ?, description = ? WHERE idbooks = ?', [title, description, id]);
}


module.exports.updateAuthor = updateAuthor;
module.exports.updateBook = updateBook;