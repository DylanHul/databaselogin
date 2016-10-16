
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, user_name: 'John', user_password: 'test1'}),
        knex('users').insert({id: 2, user_name: 'Matt', user_password: 'test2'}),
        knex('users').insert({id: 3, user_name: 'Dylan', user_password: 'test3'})
      ]);
    });
};
