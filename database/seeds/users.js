const data = require('../seeding_data');

exports.seed = async function(knex, Promise) {
  knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert(data.users);
    });
};
