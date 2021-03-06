'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StampSchema = new Schema({
  stamp_count: {
    type: Number,
  },
  created_date: {
    type: String,
  },
});

module.exports = mongoose.model('Stamp', StampSchema);
