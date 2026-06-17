const db = require('../database/connections');

module.exports = {
    async list(req, res) {
        try {
            const produtos = await db('produtos').select('*');
            return res.json(produtos);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },

    async create(req, res) {
        try {
            const { nome, valor, tamanho, quantidade, imagem } = req.body;
            await db('produtos').insert({ nome, valor, tamanho, quantidade, imagem });
            return res.status(201).json({ message: 'Produto cadastrado' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao cadastrar produto' });
        }
    }
};