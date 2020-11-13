var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'payton-dwyer-server-demo.mysql.database.azure.com',
	user: 'pdwyer@payton-dwyer-server-demo',
	password: 'password1!',
    database: 'demo',
	port: 3306,
	ssl: false
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;