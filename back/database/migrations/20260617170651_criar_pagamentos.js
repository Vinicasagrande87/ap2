exports.up = function(knex) {
  return knex.schema.createTable('pagamentos', (table) => {
    table.increments('id').primary();
    table.string('pedido_numero').notNullable(); // Identificador do pedido
    table.string('metodo').notNullable(); // 'PIX', 'Debito' ou 'Credito'
    
    // Campos para Cartão (Débito/Crédito)
    table.string('numero_cartao'); 
    table.string('validade');
    table.string('cvv');
    table.string('nome_cartao');
    table.string('parcelas'); // Ex: 'À vista', '2x', etc.
    
    // Campo para PIX
    table.string('chave_pix_utilizada');
    
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};


exports.down = function(knex) {
  return knex.schema.dropTable('pagamentos');
};