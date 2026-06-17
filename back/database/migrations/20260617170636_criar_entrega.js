exports.up = function(knex) {
  return knex.schema.createTable('entregas', (table) => {
    table.increments('id').primary();
    table.string('nome_recebedor').notNullable();
    table.string('email').notNullable();
    table.string('telefone').notNullable();
    table.string('cep').notNullable();
    table.string('rua').notNullable();
    table.string('numero').notNullable();
    table.string('complemento'); // Não obrigatório
    table.string('bairro').notNullable();
    table.string('cidade').notNullable();
    table.string('estado', 2).notNullable(); // Sigla do estado (ex: SP)
    table.text('ponto_referencia'); // Campo de texto mais longo
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('entregas');
};