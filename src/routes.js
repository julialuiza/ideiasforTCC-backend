const { Router } = require('express');
const IdeiaController = require('./controllers/IdeiaController');

const routes = Router();


routes.get('/ideias',  IdeiaController.index);
routes.post('/ideias', IdeiaController.store);


module.exports = routes;