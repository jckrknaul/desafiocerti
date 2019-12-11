const express = require('express');
const routes = express.Router();

const DesafioController = require('./src/controllers/DesafioController');

routes.get('/:id', DesafioController.execReturnExt);

module.exports = routes;