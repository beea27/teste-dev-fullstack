const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller')
const Descoberta = require('./controllers/descobertas.controller')
const Comentario = require('./controllers/comentarios.controller')

routes.get('/', Usuario.index);

routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details/:_id', Usuario.details);
routes.delete('/api/usuarios/:_id', Usuario.delete);
routes.put('/api/usuarios', Usuario.update);

routes.post('/api/descobertas', Descoberta.create);
routes.get('/api/descobertas', Descoberta.index);
routes.get('/api/descobertas.details/:_id', Descoberta.details);
routes.delete('/api/descobertas/:_id', Descoberta.delete);
routes.put('/api/descobertas', Descoberta.update);

routes.post('/api/comentarios', Comentario.create);
routes.get('/api/comentarios', Comentario.index);
routes.get('/api/comentarios.details/:_id', Comentario.details);
routes.delete('/api/comentarios/:_id', Comentario.delete);
routes.put('/api/comentarios', Comentario.update);
module.exports = routes;