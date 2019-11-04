const db = require('../db');

function findAllAuthors(params) {
    let query = 'SELECT * FROM author';
    query = _createConditionQuery(query, params);
    return db.databaseTransaction(query);
}

function findOneAuthor(id) {
    return db.databaseTransaction(`SELECT * FROM author WHERE idauthor = ?;`, [id]);
}

function findAllBooks(params) {
    let query = 'SELECT * FROM books';
    query = _createConditionQuery(query, params);
    return db.databaseTransaction(query); 
}


function _createConditionQuery(query, params) {
    let condition = {
        filterField: params.filterField,
        filterParams : params.filterParams,
        orderField : params.orderField,
        orderParams : params.orderParams,
        limit : params.limit,
        offset : params.offset
    };

    if(condition.filterField){
        query += ` WHERE ${condition.filterField} = ${condition.filterParams}`;
    } 
    if(condition.orderField) {
        query += ` ORDER BY ${condition.orderField}`;
        if(condition.orderParams) {
            query += ' ' + condition.orderParams + ' ';
        }
    } 
    
    if(condition.limit) {
       query += ` LIMIT ${condition.limit} `;
       if (condition.offset){
            query += ` OFFSET ${condition.offset} `;
        }
    }
    return query;
}
function findOneBook(id) {
    return db.databaseTransaction(`SELECT * FROM books WHERE idbooks = ?;`, [id]);
}

module.exports.findOneAuthor = findOneAuthor;
module.exports.findOneBook = findOneBook;
module.exports.findAllAuthors = findAllAuthors;
module.exports.findAllBooks = findAllBooks;