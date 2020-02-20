const mysql = require('mysql');

const conection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "teste_py"
});

conection.connect(function (err) {
  if (err) throw err;
});


module.exports = conection;
