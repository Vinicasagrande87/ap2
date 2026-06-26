const express = require('express');
const routes = express.Router();

const { autenticar, apenasAdmin } = require('./middlewares/auth');
const UsuarioController   = require('./controllers/UsuarioController');
const ProdutoController   = require('./controllers/ProdutoController');
const EntregaController   = require('./controllers/EntregaController');
const PagamentoController = require('./controllers/PagamentoController');
const RelatorioController = require('./controllers/RelatorioController');

// Públicas
routes.post('/usuarios', UsuarioController.create);
routes.post('/login',    UsuarioController.login);
routes.get('/produtos',  ProdutoController.list);

// Autenticadas
routes.post('/entrega',    autenticar, EntregaController.create);
routes.post('/pagamentos', autenticar, PagamentoController.create);

// Apenas admin
routes.post('/produtos',        autenticar, apenasAdmin, ProdutoController.create);
routes.put('/produtos/:id',     autenticar, apenasAdmin, ProdutoController.update);
routes.delete('/produtos/:id',  autenticar, apenasAdmin, ProdutoController.destroy);
routes.get('/admin/relatorios', autenticar, apenasAdmin, RelatorioController.index);

const upload = require('./middlewares/upload');
routes.post('/upload', autenticar, apenasAdmin, upload.single('imagem'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'Nenhum arquivo enviado' });
    const url = `http://localhost:3000/uploads/${req.file.filename}`;
    return res.json({ url });
});

module.exports = routes;