'use strict';
module.exports = app => {
  const soundsController = require('../controllers/soundsController');

  /**
   * User Routes
   */
  app.route('/api/sounds/').get(soundsController.get_all_sounds);
  app.route('/api/sounds/upload').post(soundsController.upload_single_track);
};
