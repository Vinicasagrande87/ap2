const db = require('../database/connections');

module.exports = {
    async gerarRelatorioCompleto(filtros) {
        let query = db('pedidos');

        // Filtro por período (Data Inicial e Final)
        if (filtros.data_inicio && filtros.data_fim) {
            query = query.whereBetween('created_at', [filtros.data_inicio, filtros.data_fim]);
        }

        // Filtro por status
        if (filtros.status) {
            query = query.where('status', filtros.status);
        }

        // Filtro por método de pagamento
        if (filtros.metodo) {
            query = query.where('metodo_pagamento', filtros.metodo);
        }

        const dados = await query;

        // Processamento (Agregações)
        const totalArrecadado = dados.reduce((acc, curr) => acc + parseFloat(curr.valor), 0);
        const quantidadePedidos = dados.length;
        
        // Agrupamento por status (Exemplo de métrica extra)
        const porStatus = dados.reduce((acc, curr) => {
            acc[curr.status] = (acc[curr.status] || 0) + 1;
            return acc;
        }, {});

        return {
            filtrosAplicados: filtros,
            totalArrecadado,
            quantidadePedidos,
            ticketMedio: quantidadePedidos > 0 ? (totalArrecadado / quantidadePedidos) : 0,
            porStatus
        };
    }
};