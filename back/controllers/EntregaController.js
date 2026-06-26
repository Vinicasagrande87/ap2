const EntregaService = require('../services/EntregaService');

module.exports = {
    async create(req, res) {
        try {
            await EntregaService.salvar(req.body);
            return res.status(201).json({ message: 'Endereço de entrega salvo' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao salvar endereço' });
        }
    }
};