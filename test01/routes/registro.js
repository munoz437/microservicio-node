var express= require('express');
var axios= require('axios');
var xml2js= require('xml2js');
var router=express.Router();

//const oracledb= require('oracledb');

async function getDataFromDatabaseMysql(){
    return new Promise((resolve, reject)=>{
        var mysql= require('mysql');
        var connection= mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'baseDatos'
        });
        connection.connect();
        connection.query('SELECT * FROM proveedores', function(error, result, fields){
            if(error) throw error;
            resolve(result);
        });
        connection.end();
    });
}


router.get('/consulta',keycloak.protect(), async function(req, res){
    const resultFromDatabase= await getDataFromDatabaseMysql();
    res.send({result:resultFromDatabase});
});

module.exports= router;
