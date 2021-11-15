module.exports = (app) => {
  const storeController = require('../controllers/store.controller');
  app.route('/api/v2/stores/add-store').post(storeController.add_store);
};
