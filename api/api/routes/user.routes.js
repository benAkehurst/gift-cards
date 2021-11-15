module.exports = (app) => {
  const userController = require("../controllers/user.controller");
  app
    .route("/api/v2/user/add-card/:token/:userId/:storeId")
    .post(userController.add_card);
  app
    .route("/api/v2/user/remove-card/:token/:userId/:storeId")
    .post(userController.remove_card);
  app
    .route("/api/v2/user/add-transaction/:token/:userId/:storeId/:noOfStamps")
    .post(userController.add_transaction);
};
