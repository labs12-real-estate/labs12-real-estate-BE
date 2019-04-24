const express = require('express');

const Houses = require('./housesModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'express router working'});
});

module.exports = router;