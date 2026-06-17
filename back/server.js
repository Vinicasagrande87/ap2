require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes'); // ← importa o arquivo de rotas

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes); // ← usa as rotas

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}`);
});

module.exports = app;