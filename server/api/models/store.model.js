'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  store_name: {
    type: String,
  },
  store_admin: {
    type: String,
  },
  unique_store_id: {
    type: String,
  },
});

module.exports = mongoose.model('Store', StoreSchema);
