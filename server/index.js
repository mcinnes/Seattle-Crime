require('dotenv').load();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'process.env.DBServer',
    user     : 'process.env.DBUser',
    password : 'process.env.DBPass',
    database : 'process.env.DBName'
});

connection.connect();

exports.handler = (event, context) => {

    //Select 5 results from the database
    connection.query('SELECT * FROM data LIMIT 5', function (error, results, fields) {
    // And done with the connection.
    console.log(results);
    
    // Handle error after the release.
    if (error) throw error;
        console.log(error);
    });
  	
    connection.end();
    return callback(null, { result: 'success', message: 'query processed correctly'})

};
