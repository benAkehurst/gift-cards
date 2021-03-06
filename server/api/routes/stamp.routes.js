'use strict';
module.exports = (app) => {
  const stampController = require('../controllers/stamp.controller');
  app
    .route(
      '/api/v1/stamps/add-stamp/:requesterId/:customerId/:numberOfStamps/:token'
    )
    .post(stampController.add_stamp);
};
