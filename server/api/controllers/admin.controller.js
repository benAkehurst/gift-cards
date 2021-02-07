'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Access = mongoose.model('Access');

/**
 * Method to create a store in the db
 * POST
 * data: {store_name: '', store_admin: 'unique ID of the admin', unique_store_id: uuid()}
 */
exports.add_new_store = async (req, res) => {
  /**
   * LOGIC
   * 1. check user is admin
   * 2. check if store name exists
   * 3. add new store
   */
};

/**
 * Method to add an access code for a store
 * GET
 * Params - /:storeId/:uniqueId
 */
exports.add_access_code = async (req, res) => {
  /**
   * LOGIC
   * 1. go to access model and look for access with same store ID
   * 2. delete it
   * 3. add a new one
   */
};
exports.get_all_users = async (req, res) => {};
exports.change_user_roll = async (req, res) => {};
exports.get_single_user = async (req, res) => {};
exports.delete_single_user = async (req, res) => {};
