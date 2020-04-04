'use strict';
module.exports = app => {
  const stampController = require('../controllers/stampController');

  /**
   * Stamp Routes
   */
  app.route('/api/stamps/add-stamp').post(stampController.add_stamp);
};
