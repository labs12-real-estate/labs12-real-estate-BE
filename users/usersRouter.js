const express = require('express');

const Users = require('./usersModel.js');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const user = await Users.create(req.body);
    if (!user) {
      return res.status(422).json({ message: 'Both email and password are required.' });
    }
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal error.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await Users.getOne({ userId: req.params.id });
    if (!user) {
      return res.status(404).json({ message: 'Can not find a user with that ID.' });
    }
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal error.' });
  }
});

router.put('/:id', async (req, res) => {
  const { email, password, profile_image, currentPassword } = req.body;
  //User must provide current password, to change their password.
  if (password && !currentPassword) {
    return res.status(422).json({
      message: 'You must provide your current password if you want to change it to something else.'
    });
  }

  //Construct new properties that are for updating the user.
  let newProps = {};
  if (email) {
    newProps.email = email;
  }
  if (password) {
    newProps.password = password;
  }
  if (profile_image) {
    newProps.profile_image = profile_image;
  }

  try {
    const findUser = await Users.getOne({ userId: req.params.id });
    if (!findUser) {
      return res.status(404).json({ message: 'No user found with that ID.' });
    }
    //If user provided password, check if their currentPass that they passed in matches their actual current password.
    if (password) {
      if (findUser.password !== currentPassword) {
        return res.status(400).json({ message: 'Incorrect password. Can not modify user.' });
      } else {
        const updatedUser = await Users.update(req.params.id, newProps);
        return res.status(201).json(updatedUser);
      }
      //If the user didn't provide a password, just update the user.
    } else {
      const updatedUser = await Users.update(req.params.id, newProps);
      return res.status(201).json(updatedUser);
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal error.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const foundUser = await Users.getOne({ userId: req.params.id });
    if (!foundUser) {
      return res.status(404).json({ message: 'No user found with that ID.' });
    }
    const deleted = await Users.del(req.params.id);
    if (deleted) {
      return res.status(200).json({ message: 'Account deleted.' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal error.' });
  }
});

module.exports = router;
