module.exports = (app) => {
  const storeController = require('../controllers/store.controller');
  app.route('/api/v2/stores/add-store').post(storeController.add_store);
  app
    .route('/api/v2/stores/remove-store/:storeId')
    .delete(storeController.remove_store);
};
