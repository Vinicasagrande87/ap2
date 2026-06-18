exports.up = function(knex) {
  return knex.schema.alterTable('produtos', (table) => {
    table.string('imagem_verso');
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('produtos', (table) => {
    table.dropColumn('imagem_verso');
  });
};