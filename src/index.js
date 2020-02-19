#!/usr/bin/env node

const yargs = require("yargs")
const axios = require("axios")
var operationsDataBase = require('./operations.js')


const options = yargs
  .usage("Usage: -c <cep>")
  .option("c", { alias: "cep", describe: "Cep to search", type: "string", demandOption: true })
  .argv

const cep = `Cep a ser buscado: ${options.cep} ...`
console.log(cep)

const url = "http://cep.bldstools.com/?cep=" + cep

axios.get(url, { headers: { Accept: "application/json" } })
  .then(res => {
    console.log('\n')
    console.log(res.data);
    operationsDataBase.insertIntoDatabase(res.data)

  }); 
