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
            if (error) throw error;
            console.log(results[0]);
            resolve(results[0]);
          });
    })
}

module.exports.databaseTransaction = databaseTransaction;