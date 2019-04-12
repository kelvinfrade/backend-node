const express = require('express');

const routes = express.Router();

const multer = require('multer');
const BoxController = require('./controllers/BoxController');
const multerConfig = require('./config/multer');
const FileController = require('./controllers/FileController');
// req = requisição do usuario com algum tipo de dado.
// res = returnar uma resposta para o cliente.
// GET /POST/PUT/DELETE

// routes.get('/', (req, res ) => {
// return res.send('Hello World Rocket');
// })

routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

routes.post(
  '/boxes/:id/files',
  multer(multerConfig).single('file'),
  FileController.store,
);

module.exports = routes;
