const mongoose = require('mongoose');
const User = mongoose.model('User');
const Store = mongoose.model('Store');
const Card = mongoose.model('Card');
const { AddNewCardToUser } = require('../db/user.db');
const { AddUserToStore } = require('../db/store.db');
const jwt = require('jsonwebtoken');

exports.add_card = async (req, res) => {
  const { token, userId, storeId } = req.params;
  if (!token || !userId || !storeId) {
    return res.status(400).send({
      message: 'Missing required parameters',
    });
  }
  if (!jwt.verify(token, process.env.JWT_SECRET)) {
    res.status(501).json({
      success: false,
      message: 'Token not valid.',
      data: null,
    });
  } else {
    const newCard = new Card({
      userRef: userId,
      storeRef: storeId,
    });
    const generatedCard = await newCard.save();
    const user = await AddNewCardToUser(userId, generatedCard._id);
    await AddUserToStore(userId, storeId);
    res.status(201).json({
      success: true,
      message: 'Card added successfully.',
      data: {
        user,
      },
    });
    try {
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'General error adding card to user wallet',
        data: null,
      });
    }
  }
};
exports.get_all_cards = async (req, res) => {};
exports.remove_card = async (req, res) => {};
exports.add_stamp = async (req, res) => {};
