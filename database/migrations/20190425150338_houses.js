exports.up = function(knex, Promise) {
  return knex.schema.createTable('houses', tbl => {
    tbl.increments('houseId');
    tbl.string('description');
    tbl.string('backdrop_image');
    tbl.string('photos_path');
    tbl.string('recent_remodel');
    tbl.string('upgrades');
    tbl.integer('userId');
    tbl
      .foreign('userId')
      .unsigned()
      .references('users.userId')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .notNullable();

    tbl.string('user_data_countertops');
    tbl.integer('user_data_ac_furnace_age');
    tbl.integer('user_data_roof_age');
    tbl.string('user_data_flooring');
    tbl.string('user_data_windows');
    tbl.string('user_data_solar');
    tbl.string('user_data_pole_barn');
    tbl.string('user_data_swimming_pool');

    tbl.string('parcel_data_address');
    tbl.float('parcel_data_sq_ft');
    tbl.integer('parcel_data_year_built');
    tbl.string('parcel_data_architectural_style');
    tbl.integer('parcel_data_num_bedrooms');
    tbl.integer('parcel_data_num_bathrooms');
    tbl.string('parcel_data_basement');
    tbl.string('parcel_data_basement_finished');
    tbl.integer('parcel_data_size_of_lot');
    tbl.integer('parcel_data_garage_size');
    tbl.string('parcel_data_sold_data');
    tbl.string('parcel_data_waterfront_property');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('houses');
};
