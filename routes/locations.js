// Utilizando express, rotas do express e arquivo controller
const express = require('express');
const router = express.Router();
const locationsController = require('../controllers/locations');

// Rota e método que pegam todas as localidades do banco de dados
router.get('/locations', locationsController.getLocations);
// Rota e método que criam uma nova localidade no banco de dados
router.post('/', locationsController.createLocation);

// Exportando as rotas e seus métodos
module.exports = router;