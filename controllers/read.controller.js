const db = require('../db');

function findAll() {
    return db.databaseTransaction(`SELECT * FROM author;`);
}

function findOne(id) {
    
}

module.exports.findAll = findAll;