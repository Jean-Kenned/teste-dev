const mysql = require('mysql');

const conection = mysql.createConnection({
  host: "staging.cweudo5c98bn.sa-east-1.rds.amazonaws.com",
  user: "pyqa",
  password: "sUQu1gH7gl9#uBoKnB",
  database: "teste_py"
});

conection.connect(function (err) {
  if (err) throw err;
});


module.exports = conection;
