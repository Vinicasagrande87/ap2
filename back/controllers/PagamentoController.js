const PagamentoService = require('../services/PagamentoService');

module.exports = {
    async create(req, res) {
        try {
            const numeroPedido = await PagamentoService.salvar(req.body);

            return res.status(201).json({
                message: 'Pagamento registrado com sucesso',
                numeroPedido
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Erro ao registrar pagamento'
            });
        }
    }
};