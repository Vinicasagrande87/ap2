const db = require('../database/connections');

module.exports = {
    async create(req, res) {
        try {
            const dadosEntrega = req.body;
            await db('entregas').insert(dadosEntrega);
            return res.status(201).json({ message: 'Endereço de entrega salvo' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao salvar endereço' });
        }
    }
};