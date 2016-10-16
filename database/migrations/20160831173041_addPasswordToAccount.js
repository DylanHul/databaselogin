
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.string('user_password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('user_password');
  })
};
