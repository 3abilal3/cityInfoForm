// models/City.js

const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  coordinates: { type: String, required: true },
  population: { type: Number, required: true },
  languages: [{ type: String, required: true }],
  images: [String],
  festivals: [{
    name: String,
    date: Date
  }]
});

module.exports = mongoose.model('City', citySchema);
