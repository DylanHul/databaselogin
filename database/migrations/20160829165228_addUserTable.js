
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id').primary();
    table.string('user_name');
  })

};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};
