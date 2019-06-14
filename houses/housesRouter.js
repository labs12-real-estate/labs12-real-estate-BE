const express = require('express');
const axios = require('axios');

const Houses = require('./housesModel.js');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const house = await Houses.getOne({ houseId: req.params.id });
    if (!house) {
      return res.status(404).json({ message: 'Cannot find a house with that ID.' });
    }
    return res.status(200).json(house);
  } catch (error) {
    res.status(500).json({ message: 'Internal error.' });
  }
});

router.get('/ofuser/:id', async (req, res) => {
  try {
    const houses = await Houses.getMany({ userId: req.params.id });
    if (!houses) {
      return res.status(404).json({ message: 'Cannot find any house with that user ID.' });
    }
    return res.status(200).json(houses);
  } catch (error) {
    res.status(500).json({ message: 'Internal error.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const house = await Houses.create(req.body);
    if (!house) {
      return res.status(422).json({ message: 'userId is missing or userId is not in database.' });
    }
    return res.status(200).json(house);
  } catch (error) {
    res.status(500).json({ message: 'Internal error.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const foundHouse = await Houses.getOne({ houseId: req.params.id });
    if (!foundHouse) {
      return res.status(404).json({ message: 'No house found with that ID.' });
    }
    const deleted = await Houses.del(req.params.id);
    if (deleted) {
      return res.status(200).json({ message: 'House information deleted.' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal error.' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const foundHouse = await Houses.getOne({ houseId: req.params.id });
    if (!foundHouse) {
      return res.status(404).json({ message: 'No house found with that ID.' });
    }
    const updatedHouse = await Houses.update(req.params.id, req.body);
    return res.status(201).json(updatedHouse);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error.' });
  }
});

router.post('/getvalue', (req, res) => {
  const address = req.body.address;
  const key = process.env.GOOGLE_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;
  axios
    .get(url)
    .then(data => {
      let complete_address = data.data.results[0].formatted_address;
      complete_address = complete_address.slice(0, -5); // remove 5 characters ", USA" at the end
      // complete_address = complete_address.slice(0, -6) + ',' + complete_address.slice(-6, complete_address.length); // insert comma between state and zipcode
      axios
        .post('http://testresaddress-env.wbjgxafvnf.us-east-2.elasticbeanstalk.com/', { address: complete_address })
        .then(data => {
          data.data.address = complete_address;
          res.status(200).json(data.data);
        })
        .catch(err => {
          return res.status(500).json({ err });
        });
    })
    .catch(err => {
      return res.status(500).json({ err });
    });
});

router.post('/getprecisevalue', (req, res) => {
  axios
    .post('http://valuate.us-east-1.elasticbeanstalk.com/survey', req.body)
    .then(data => {
      res.status(200).json(data.data);
    })
    .catch(err => {
      return res.status(500).json({ err });
    });
});

module.exports = router;
