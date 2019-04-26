const data = require('../seeding_data');

exports.seed = function(knex, Promise) {
  return knex('houses')
    .truncate()
    .then(function() {
      return knex('houses').insert(data.houses);
    });
};