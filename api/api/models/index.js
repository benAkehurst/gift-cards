const card = require("./card.model");
const code = require("./code.model");
const transaction = require("./transaction.model");
const store = require("./store.model");
const storeAdmin = require("./storeAdmin.model");
const user = require("./user.model");

module.exports = {
  ...card,
  ...code,
  ...transaction,
  ...store,
  ...storeAdmin,
  ...user,
};
