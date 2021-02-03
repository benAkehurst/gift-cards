'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  stamp_count: {
    type: Number,
  },
  created_date: {
    type: String,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
