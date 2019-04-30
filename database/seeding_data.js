const faker = require('faker');

const data = {
  users: [],
  houses: []
};

for (let i = 1; i <= 50; i++) {
  data.users.push({
    email: faker.internet.email(),
    password: faker.internet.password(),
    profile_image: faker.image.imageUrl()
  });
  data.houses.push({
    description: faker.lorem.sentence(),
    backdrop_image: faker.image.imageUrl(),
    recent_remodel: faker.lorem.sentence(),
    parcel_data_address: faker.address.streetAddress(),
    parcel_data_size_of_lot: faker.random.number({
      min: 1500,
      max: 3000
    }),
    parcel_data_num_bedrooms: faker.random.number({
      min: 1,
      max: 5
    }),
    parcel_data_num_bathrooms: faker.random.arrayElement([1, 1.5, 2, 2.5, 3]),
    parcel_data_garage_size: faker.random.number({
      min: 0,
      max: 3
    }),
    user_data_countertops: faker.random.arrayElement(['Granite', 'Marble', 'Laminates'])
  });
}

module.exports = data;
