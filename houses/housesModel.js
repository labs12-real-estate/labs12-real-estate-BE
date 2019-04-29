const db = require('../database/dbConfig.js');

const create = async house => {
  if (!house.userId) {
    return null;
  }
  const userExist = await db('users')
    .where({ userId: house.userId })
    .first();
  if (!userExist) {
    return null;
  }
  //Destructure the created users ID from the array received from the insert method.
  const [newHouseId] = await db('houses').insert(house);
  //Find the created house based on the id we receieved from the insert method.
  const createdHouse = await db('houses')
    .where({ houseId: newHouseId })
    .first();
  //Return the created house.
  return createdHouse;
};

const getOne = async filter => {
  //Return null if no filter is provided. Otherwise return the house if one is found, or null if none were found.
  if (!filter) {
    return null;
  }
  const foundHouse = await db('houses')
    .where(filter)
    .first();
  if (!foundHouse) {
    return null;
  }
  return foundHouse;
};

const getMany = async filter => {
  //Return null if no filter is provided. Otherwise return the houses if at least one is found, or null if none were found.
  if (!filter) {
    return null;
  }
  const foundHouses = await db('houses').where(filter);
  if (!foundHouses.length) {
    return null;
  }
  return foundHouses;
};

module.exports = { getOne, getMany, create };
