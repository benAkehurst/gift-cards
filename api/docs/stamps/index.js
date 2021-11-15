const addStamp = require("./add-stamp");

module.exports = {
  paths: {
    "/api/v1/stamps/add-stamp/:requesterId/:customerId/:numberOfStamps/:token":
      {
        ...addStamp,
      },
  },
};
