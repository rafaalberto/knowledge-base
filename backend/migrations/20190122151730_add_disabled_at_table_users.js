
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('users', table => {
      table.timestamp('disabledAt')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('users', table => {
      table.dropColumn('disabledAt')
  })
};
