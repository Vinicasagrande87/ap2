const db = require('../database/connections');

module.exports = {
    async salvar(dados) {
        // Lógica de gerar número do pedido fica no service
        const numeroPedido = 'PED-' + Math.floor(100000 + Math.random() * 900000);
        
        await db('pagamentos').insert({
            ...dados,
            pedido_numero: numeroPedido
        });

        return numeroPedido;
    }
};