const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const jwt = require('jsonwebtoken');
const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');
const sanitize = require('mongo-sanitize');

exports.add_store = async (req, res) => {
  const { token } = req.params;
  const {
    storeAdmin,
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
    !storeAdmin ||
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
  } else if (!jwt.verify(token, process.env.SECRET_KEY)) {
    res.status(401).json({
      success: false,
      message: 'Token not valid',
      data: null,
    });
  } else {
    try {
      const store = new Store({
        storeName: storeName,
        storeAdmin: storeAdmin,
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

exports.remove_store = async (req, res) => {};
exports.add_admin = async (req, res) => {};
