exports.up = function(knex) {
  return knex.schema.createTable('produtos', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.decimal('valor', 10, 2).notNullable();
    table.string('tamanho').notNullable();
    table.integer('quantidade').notNullable();
    table.string('imagem'); // ← adicionado
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos');
};