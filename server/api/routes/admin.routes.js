'use strict';
module.exports = (app) => {
  const adminController = require('../controllers/admin.controller');
  app
    .route('/api/v1/admin/get-all-users/:storeId/:uniqueId')
    .get(adminController.get_all_users);
  app
    .route('/api/v1/admin/change-user-role')
    .post(adminController.change_user_roll);
  app
    .route('/api/v1/admin/get-single-user')
    .get(adminController.get_single_user);
  app
    .route('/api/v1/admin/delete-single-user')
    .delete(adminController.delete_single_user);
};
