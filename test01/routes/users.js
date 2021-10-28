var express = require('express');
var router = express.Router();

var axios = require('axios');
var xml2js = require('xml2js');
var mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'bxjmrfycvue4jrckpz0d-mysql.services.clever-cloud.com',
  user: 'uhkqyhyt5d2rctop',
  password: '09269zlMLyLVGALtqUQh',
  database: 'bxjmrfycvue4jrckpz0d'
});


connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log('Conexion exitosa: ');
  }
});


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/consulta', async function (req, res, next) {
  var user = req.query.user;
  connection.query('SELECT * FROM Products', (error, filas) => {
    if (error) {
      throw error;
    } else {
      res.send(filas);
    }
  })
});

module.exports = router;
