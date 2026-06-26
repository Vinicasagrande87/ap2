const db = require('../database/connections');

module.exports = {
    async salvar(dados) {
        await db('entregas').insert(dados);
    }
};