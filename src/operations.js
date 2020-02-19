const { configConection } = require('./conection.js')
const conection = configConection()

function insertIntoDatabase(responseJson) {
  var sql = "INSERT INTO dados_dep (cep, nome,endereco,bairro,estado,cidade,retorno_api) VALUES ?";
  var values = [responseJson.cep, responseJson.logradouro, responseJson.logradouro, responseJson.bairro,
  responseJson.uf, responseJson.localidade, responseJson]

  try {
    conection.query(sql, [values], function (err, result) {
      console.log("Number of records inserted: " + result.affectedRows);
    })
  } catch (err) {
    console.log(err)
  }
}

function selectFromDatabase() {
  var sql = "SELECT retorno_api from dados_dep";

  try {
    conection.query(sql, function (err, result, fields) {
      //console.log(result);
      return result
    })
  } catch (err) {
    console.log(err)
  }

}


module.exports = {
  insertIntoDatabase: insertIntoDatabase,
  selectFromDatabase: selectFromDatabase
}