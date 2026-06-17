const express = require('express');
const routes = express.Router();

const { autenticar, apenasAdmin } = require('./middlewares/auth');
const UsuarioController = require('./controllers/UsuarioController');
const ProdutoController = require('./controllers/ProdutoController');
const EntregaController = require('./controllers/EntregaController');
const PagamentoController = require('./controllers/PagamentoController');
const RelatorioController = require('./controllers/RelatorioController');

// Públicas
routes.post('/usuarios', UsuarioController.create);
routes.post('/login', UsuarioController.login);
routes.get('/produtos', ProdutoController.list);

// Autenticadas
routes.post('/entrega', autenticar, EntregaController.create);
routes.post('/pagamentos', autenticar, PagamentoController.create);

// Apenas admin
routes.post('/produtos', autenticar, apenasAdmin, ProdutoController.create);
routes.get('/admin/relatorios', autenticar, apenasAdmin, RelatorioController.index);

module.exports = routes;