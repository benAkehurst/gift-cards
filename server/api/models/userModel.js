'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    unique: true
  },
  userId: {
    type: String
  },
  current_stamps: {
    type: Number,
    default: 0
  },
  completed_cards: {
    type: Array
  },
  transactions: {
    type: Array
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
