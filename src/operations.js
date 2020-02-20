const conection = require("./conection.js");

const insertIntoDatabase = ({ result }) => {
  const sql = 'INSERT INTO dados_dep (cep, nome,endereco,bairro,estado,cidade,retorno_api) VALUES (?)';
  const { cep, logradouro, bairro, uf, localidade } = result;

  const values = [
    cep,
    logradouro,
    logradouro,
    bairro,
    uf,
    localidade,
    JSON.stringify(result)
  ];

  try {
    conection.query(sql, [values], function (err, { affectedRows }) {
      console.log(`Número de registros inseridos no banco de dados: ${affectedRows}`);
    });
  } catch (err) {
    console.log(err);
  }
}

const selectFromDatabase = () => {
  const sql = "SELECT retorno_api from dados_dep";

  try {
    conection.query(sql, function (err, result, fields) {
      result.forEach(element => {
        console.log(element.retorno_api);
      });
    });
  } catch (err) {
    console.log(err);
  }

};


module.exports = {
  insertIntoDatabase,
  selectFromDatabase
};