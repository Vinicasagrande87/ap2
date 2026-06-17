const RelatorioService = require('../services/RelatorioService');

module.exports = {
    async index(req, res) {
        try {
            const filtros = req.query;
            const relatorio = await RelatorioService.gerarRelatorioCompleto(filtros);
            return res.json(relatorio);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao gerar relatório' });
        }
    }
};