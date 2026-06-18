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
            const { nome, valor, tamanho, quantidade, imagem, imagem_verso } = req.body;
            await db('produtos').insert({ nome, valor, tamanho, quantidade, imagem, imagem_verso });
            return res.status(201).json({ message: 'Produto cadastrado' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao cadastrar produto' });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, valor, tamanho, quantidade, imagem, imagem_verso } = req.body;
            await db('produtos').where({ id }).update({ nome, valor, tamanho, quantidade, imagem, imagem_verso });
            return res.json({ message: 'Produto atualizado' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar produto' });
        }
    },

    async destroy(req, res) {
        try {
            const { id } = req.params;
            await db('produtos').where({ id }).delete();
            return res.json({ message: 'Produto deletado' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao deletar produto' });
        }
    }
};