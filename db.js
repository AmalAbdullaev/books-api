const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'library'
});

function databaseTransaction(sqlQuery, params) {
    return new Promise ((resolve, reject) => {
        connection.query(sqlQuery, params, function (error, results, fields) {
            if (error) reject('Ошибка запроса');
            resolve(results);
          });
    }).catch((res) => {
        return res;
    })
}

module.exports.databaseTransaction = databaseTransaction;