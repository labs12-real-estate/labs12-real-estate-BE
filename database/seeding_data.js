const faker = require('faker');

const data = {
  users: [],
  houses: []
};

for (let i = 1; i <= 150; i++) {
  data.users.push({
    email: faker.internet.email(),
    password: faker.internet.password(),
    profile_image: faker.image.imageUrl()
  });
  data.houses.push({
    description: faker.lorem.sentence(),
    backdrop_image: faker.image.imageUrl(),
    recent_remodel: faker.lorem.sentence(),
    parcel_data_address: faker.address.streetAddress()
  });
}

module.exports = data;
