const data = require('../seeding_data');
const faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('users')
    .pluck('userId')
    .then(userIds => {
      for (let i = 0; i < data.houses.length; i++) {
        data.houses[i].userId = faker.random.arrayElement(userIds);
      }
      return knex('houses')
        .truncate()
        .then(function() {
          return knex('houses').insert(data.houses);
        });
    });
};
