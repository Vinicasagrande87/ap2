require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
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