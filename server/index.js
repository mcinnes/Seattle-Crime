var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'com-mcinnes.ccayndqpoxrm.us-east-1.rds.amazonaws.com',
    user     : 'mcinnes',
    password : 'Znrr70xx',
    database : 'seattle-crime'
});

connection.connect();

exports.handler = (event, context) => {

    connection.query('SELECT * FROM data LIMIT 5', function (error, results, fields) {
    // And done with the connection.
    console.log(results);
    
    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
    });
  	
    connection.end();
    return callback(null, { result: 'success', message: 'payment processed correctly'})

};
