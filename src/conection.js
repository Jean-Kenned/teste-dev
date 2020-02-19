var mysql = require('mysql');

var conection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "teste_py"
});

conection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = {
  configConection: () => {
    return conection
  }
}