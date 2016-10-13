const config      = require('../../knexfile').development
const knex        = require('knex')(config)

const findUserByName = (user_name) => {
  return knex('users')
    .where('user_name', user_name)
    .then( logInData => {
      return logInData
    })
}
