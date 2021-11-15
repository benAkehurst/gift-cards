const card = require("./card.model");
const code = require("./code.model");
const stamp = require("./stamp.model");
const store = require("./store.model");
const storeAdmin = require("./storeAdmin.model");
const user = require("./user.model");

module.exports = {
  ...card,
  ...code,
  ...stamp,
  ...store,
  ...storeAdmin,
  ...user,
};
