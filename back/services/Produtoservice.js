const db = require('../database/connections');

module.exports = {
    async listar() {
        const produtos = await db('produtos').select('*');

        // Agrupamento por nome feito no back
        const mapa = {};
        produtos.forEach(item => {
            if (!mapa[item.nome]) {
                mapa[item.nome] = {
                    id:           item.id,
                    nome:         item.nome,
                    imagem:       item.imagem,
                    imagem_verso: item.imagem_verso,
                    valor:        item.valor,
                    tamanhos:     []
                };
            }
            mapa[item.nome].tamanhos.push({
                tamanho:    item.tamanho,
                quantidade: item.quantidade
            });
        });

        return Object.values(mapa);
    },

    async cadastrar(dados) {
        const { nome, valor, tamanho, quantidade, imagem, imagem_verso } = dados;
        await db('produtos').insert({ nome, valor, tamanho, quantidade, imagem, imagem_verso });
    },

    async atualizar(id, dados) {
        const { nome, valor, tamanho, quantidade, imagem, imagem_verso } = dados;
        await db('produtos').where({ id }).update({ nome, valor, tamanho, quantidade, imagem, imagem_verso });
    },

    async deletar(id) {
        await db('produtos').where({ id }).delete();
    }
};