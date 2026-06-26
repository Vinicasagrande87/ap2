const ProdutoService = require('../services/ProdutoService');

module.exports = {
    async list(req, res) {
        try {
            const produtos = await ProdutoService.listar();
            return res.json(produtos);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },

    async create(req, res) {
        try {
            await ProdutoService.cadastrar(req.body);
            return res.status(201).json({ message: 'Produto cadastrado' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao cadastrar produto' });
        }
    },

    async update(req, res) {
        try {
            await ProdutoService.atualizar(req.params.id, req.body);
            return res.json({ message: 'Produto atualizado' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar produto' });
        }
    },

    async destroy(req, res) {
        try {
            await ProdutoService.deletar(req.params.id);
            return res.json({ message: 'Produto deletado' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao deletar produto' });
        }
    }
};