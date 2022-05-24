// Utilizando os módulos express, locations e body-parser
const express = require('express');
const locations = require('./routes/locations');
const bodyParser = require('body-parser');

// Definindo a porta do servidor e criando o servidor
const PORT = 3000;
const app = express();

// Utilizando body-parser no servidor, servindo arquivos estáticos e utilizando a rota locations
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', locations);

// Inicializando o servidor na porta 3000
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});