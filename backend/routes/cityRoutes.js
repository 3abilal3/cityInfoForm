const express = require('express');
const router = express.Router();
const City = require('../models/City');

router.post('/', async (req, res) => {
    try {
      const newCity = new City(req.body);
      const savedCity = await newCity.save();
      res.status(201).json(savedCity);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  

router.get('/search', async (req, res) => {
  try {
    const cities = await City.find({ name: { $regex: req.query.q, $options: 'i' } });
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
