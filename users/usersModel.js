const db = require('../database/dbConfig.js');

const create = async user => {
  if (!user.email || !user.password) {
    return null;
  }
  //Destructure the created users ID from the array received from the insert method.
  const [newUserId] = await db('users').insert(user, 'userId');
  //Find the created user based on the id we receieved from the insert method.
  const createdUser = await db('users')
    .where({ userId: newUserId })
    .first();
  //Return the created user.
  return createdUser;
};

const get = async () => {
  const foundUsers = await db('users');
  return foundUsers;
};

const getOne = async filter => {
  //Return null if no filter is provided. Otherwise return the user if one is found, or null if none were found.
  if (!filter) {
    return null;
  }
  const foundUser = await db('users')
    .where(filter)
    .first();
  if (!foundUser) {
    return null;
  }
  return foundUser;
};

const update = async (userId, props) => {
  if (!userId || !props) {
    return null;
  }
  const count = await db('users')
    .where({ userId })
    .update(props);
  if (!count) {
    return null;
  }
  const updatedUser = await getOne({ userId });
  return updatedUser;
};

const del = async userId => {
  const deleted = await db('users')
    .where({ userId })
    .del();
  if (!deleted) {
    return null;
  }
  return true;
};

module.exports = {
  create,
  get,
  getOne,
  update,
  del
};
