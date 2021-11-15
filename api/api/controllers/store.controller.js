const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const StoreAdmin = mongoose.model('StoreAdmin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');
const sanitize = require('mongo-sanitize');

exports.add_store = async (req, res) => {
  const {
    storeAdminName,
    adminEmail,
    adminPassword,
    storeName,
    storeAddress,
    storePostcode,
    storePhone,
    storeEmail,
  } = req.body;
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).json({
      success: false,
      message: 'Please provide all required fields',
      data: null,
    });
  } else if (
    !storeAdminName ||
    !storeName ||
    !storeAddress ||
    !storePostcode ||
    !storePhone ||
    !storeEmail
  ) {
    res.status(400).json({
      success: false,
      message: 'Please provide all required fields',
      data: null,
    });
  } else {
    try {
      const storeAdmin = new StoreAdmin({
        storeAdminName,
        adminEmail,
        adminPassword: bcrypt.hashSync(adminPassword, 14),
      });
      await storeAdmin.save();
      const store = new Store({
        storeName: storeName,
        storeAdmin: storeAdmin._id,
        uniqueStoreId: uuidv4(),
        storeDetails: {
          address: storeAddress,
          postcode: storePostcode,
          phone: storePhone,
          email: storeEmail,
        },
      });
      await store.save();
      res.status(201).json({
        success: true,
        message: 'Store added',
        data: store,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        data: null,
      });
    }
  }
};

exports.remove_store = async (req, res) => {
  const { storeId } = req.params;
  if (!storeId) {
    res.status(400).json({
      success: false,
      message: 'Please provide store id',
      data: null,
    });
  } else {
    try {
      const store = await Store.findById(storeId);
      const storeAdmin = await StoreAdmin.findById(store.storeAdmin);
      if (!store) {
        res.status(404).json({
          success: false,
          message: 'Store not found',
          data: null,
        });
      } else {
        await store.remove();
        await storeAdmin.remove();
        res.status(200).json({
          success: true,
          message: 'Store removed',
          data: null,
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        data: null,
      });
    }
  }
};
exports.add_admin = async (req, res) => {};
