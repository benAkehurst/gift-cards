'use strict';
module.exports = (app) => {
  const stampController = require('../controllers/stamp.controller');

  /**
   * Stamp Routes
   */
  app
    .route('/api/v1/stamps/add-stamp/:customerId/:numberOfStamps/:token')
    .post(stampController.add_stamp);
};
