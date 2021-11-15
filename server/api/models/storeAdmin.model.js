const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreAdminSchema = new Schema({
  admin_name: {
    type: String,
  },
  storeId: {
    type: String,
  },
});

module.exports = mongoose.model("StoreAdmin", StoreAdminSchema);
