const data = require('../seeding_data');

exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert(data.users);
    });
};
