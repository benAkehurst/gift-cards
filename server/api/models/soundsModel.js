'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SoundsSchema = new Schema({
  title: {
    type: String
  },
  sound_collection: {
    type: String
  },
  character: {
    type: String
  },
  sound_url: {
    type: String
  }
});

module.exports = mongoose.model('Sounds', SoundsSchema);
