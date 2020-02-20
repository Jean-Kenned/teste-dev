#!/usr/bin/env node

const axios = require("axios");
const operationsDataBase = require('./operations.js');
const prompt = require('prompt');

console.log('Deseja buscar dados da API (1) ou exibir dados salvos (2)?\n');
prompt.start();
prompt.get(['option'], function (err, result) {
  if (err) { return onErr(err); }

  let option = result.option;
  if (option === '1') {
    console.log("Insira o cep para buscar:");
    prompt.get(['cep'], function (err, result) {
      if (err) { return onErr(err); }
      fetchApi(result.cep);
    });

  } else if (option === '2') {
    showData();
  } else {
    console.log("Opcao Invalida");
    awaitConsole();
  }

});


const fetchApi = (cepToSearch) => {

  const cep = `Cep a ser buscado: ${cepToSearch} ...`;
  const url = "http://cep.bldstools.com/?cep=" + cep;
  console.log(cep);

  axios.get(url, { headers: { Accept: "application/json" } })
    .then(res => {
      console.log('\n');
      console.log(res.data);
      if (res.data.code === 200) {
        operationsDataBase.insertIntoDatabase(res.data);
      }
    });

  awaitConsole();
}

const showData = () => {
  operationsDataBase.selectFromDatabase();
  awaitConsole();

}


const awaitConsole = () => {
  setTimeout((function () {
    return process.exit();
  }), 1000);
}