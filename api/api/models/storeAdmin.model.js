const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreAdminSchema = new Schema({
  storeAdminName: {
    type: String,
  },
  adminEmail: {
    type: String,
  },
  adminPassword: {
    type: String,
  },
});

module.exports = mongoose.model('StoreAdmin', StoreAdminSchema);
