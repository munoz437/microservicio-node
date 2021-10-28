var express= require('express');
// var axios= require('axios');
// var xml2js= require('xml2js');
var router = express.Router();

// var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'articlesdb'
// });


// connection.connect(function (error) {
//     if (error) {
//         throw error;
//     } else {
//         console.log('Conexion exitosa: ');
//     }
// });

// async function getDataFromDatabaseMysql(){
//     return new Promise((resolve, reject)=>{
//         var mysql= require('mysql');
//         var connection= mysql.createConnection({
//             host: 'localhost',
//             user: 'root',
//             password: '',
//             database: 'baseDatos'
//         });
//         connection.connect();
//         connection.query('SELECT * FROM proveedores', function(error, result, fields){
//             if(error) throw error;
//             resolve(result);
//         });
//         connection.end();
//     });
// }

//,keycloak.protect()
router.get('/consulta', async function(req, res,next){
    // const resultFromDatabase= await getDataFromDatabaseMysql();
    // res.send({result:resultFromDatabase});
    // connection.query('SELECT * FROM articles', (error, filas) => {
    //     if (error) {
    //         throw error;
    //     } else {
    //         res.send(filas);
    //     }
    // })
    res.send('Inicio ');
});

module.exports = router;
