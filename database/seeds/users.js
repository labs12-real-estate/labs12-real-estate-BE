const data = require('../seeding_data');

exports.seed = function(knex, Promise) {
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert(data.users);
    });
};
