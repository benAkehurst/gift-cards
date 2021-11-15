const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  storeName: {
    type: String,
  },
  storeAdmin: {
    type: String,
  },
  uniqueStoreId: {
    type: String,
  },
  storeDetails: {
    type: Object,
  },
  usersRef: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model('Store', StoreSchema);
