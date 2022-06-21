const express = require("express");
const {Client} = require('pg'); 
const cors = require("cors");
const bodyparser = require("body-parser");
const config = require("./config");

// const mysql_connector = require("mysql");

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());
// ^ analisador sintatico do corpo no formato json

// const connection = mysql_connector.

var conString = config.urlConnection;

var client = new Client(conString);

// createConnection({
//     host: config.host,
//     user: config.user,
//     password: config.password,
//     database: config.database,
//     port: config.port_mysql,
// });

client.connect(function(err){
    if(err){
        return console.error('Não foi possível conectar ao banco.', err);
    }
    client.query('SELECT NOW()', function(err, result) {
    if(err) {
        return console.error('Erro ao executar a query.', err);
    }
        console.log(result.rows[0]);
    });
});

// app.get("/", (req, res) => {
//     console.log("Response ok.");
//     res.send("Ok");
// });

// app.listen(config.port, () => {
//     console.log("Servidor funcionando na porta " + config.port);
// });

app.get("/", (req, res) => {
    console.log("Response ok.");
    res.send("Ok");
});

app.listen(config.port, () =>
console.log("Servidor funcionando na porta " + config.port)
);

app.get("/allUsers", (req, res) => {
    try{
        client.query('SELECT * FROM Usuarios', function(err, result){
        if(err){
                return console.error('Erro ao executar a query', err);
            }
            res.send(result.rows);
            console.log("Chamou allUsers");
        });
    } catch (error) {
        console.log(error);
    }
});
