exports.up = function(knex) {
  return knex.schema.createTable('pedidos', (table) => {
    table.increments('id').primary();
    table.string('pedido_numero').notNullable();
    table.integer('usuario_id').references('id').inTable('usuarios');
    table.decimal('valor', 10, 2).notNullable();
    table.string('status').defaultTo('pendente'); // pendente, pago, cancelado
    table.string('metodo_pagamento');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pedidos');
};