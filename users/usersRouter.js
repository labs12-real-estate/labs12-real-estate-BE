const express = require('express');

const Users = require('./usersModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  const obj = Users.getAll();
  res.status(200).json(obj);
});

module.exports = router;
