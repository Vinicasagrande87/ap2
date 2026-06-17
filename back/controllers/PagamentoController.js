const db = require('../database/connections');

module.exports = {
    async create(req, res) {
        try {
            const dadosPagamento = req.body;
            await db('pagamentos').insert(dadosPagamento);
            return res.status(201).json({ message: 'Pagamento registrado' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao registrar pagamento' });
        }
    }
};