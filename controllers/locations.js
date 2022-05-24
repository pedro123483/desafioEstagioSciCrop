// Utilizando os módulos express, body-parser e sqlite3
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

// Utilizando o arquivo que contém o banco de dados e criando um novo banco de dados
const DBPATH = './database/locations.db';
const db = new sqlite3.Database(DBPATH);

// Criando servidor
const app = express();

// Utilizando bodyparser, nos permite acessar as informações passadas na hora da requisição
app.use(bodyParser.urlencoded({ extended: true }));

// Método que retorna todas as localidades do banco de dados
const getLocations = (req, res) =>{
    const sql = 'SELECT * FROM localidades';
    db.all(sql, [], (err, rows) =>{
        if(err){
            throw err;
        } else {
            res.json(rows);
        }
    });

}

// Método que cria uma nova localidade no banco de dados
const createLocation = (req, res) =>{
    const nome = req.body.nome;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    const sql = 'INSERT INTO localidades (nome, latitude, longitude) values (?, ?, ?)';
    db.run(sql, [nome, latitude, longitude], (err) =>{
        if(err){
            throw err;
        } else {
            res.redirect('/locations.html');
        }
    });
}

// Exportando esses métodos para utiliza-los em outros arquivos
module.exports = {
    getLocations,
    createLocation
}