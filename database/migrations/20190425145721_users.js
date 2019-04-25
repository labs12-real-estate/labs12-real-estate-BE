exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments('userId');
    tbl.string('email').notNullable();
    tbl.string('password').notNullable();
    tbl.string('profile_image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
