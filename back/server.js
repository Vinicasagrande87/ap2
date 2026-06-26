require('dotenv').config();
//estou deixando disponivel as chaves de acesso declaradas no .env
const express = require('express');
//estou instaciando o framework express dentro da const express
const cors = require('cors');
//biblioteca que permite a troca entre back e front
const app = express();
// instanciando as funcionalidades do express na variavel app
const routes = require('./routes');
// 
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}`);
});

module.exports = app;