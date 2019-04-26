const db = require('../database/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert() {
}

function update() {
}

function remove() {
}

function getAll() {
  return db('users');
}

function findById() {
}
