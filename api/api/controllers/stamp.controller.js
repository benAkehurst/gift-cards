'use strict';
const mongoose = require('mongoose');
const { format, addMinutes } = require('date-fns');
const { v4: uuidv4 } = require('uuid');
const { checkToken } = require('../../services/validatorsService');
const User = mongoose.model('User');

/**
 * Method to add stamp to user
 * POST
 * Params - /:requesterId/:customerId/:numberOfStamps/:token
 */
exports.add_stamp = async (req, res) => {
  const { requesterId, customerId, numberOfStamps, token } = req.params;
  if (!requesterId || !customerId || !numberOfStamps || !token) {
    res.status(400).json({
      success: false,
      message: 'Please provide all required fields',
      data: null,
    });
  } else {
    try {
      const admin = await User.findOne({ uniqueId: requesterId });
      const user = await User.findOne({ customerId: customerId });
      const tokenValid = await checkToken(token);
      const singleTransactionObject = {
        stamp_count: parseInt(numberOfStamps),
        admin_user: admin.uniqueId,
        created_date: format(new Date(), 'dd/MM/yyyy'),
        created_time: format(new Date(), 'HH:mm:ss'),
        transaction_id: uuidv4(),
      };
      const completedCardObject = {
        admin_user: admin.uniqueId,
        created_date: format(new Date(), 'dd/MM/yyyy'),
        created_time: format(new Date(), 'HH:mm:ss'),
      };
      if (!user) {
        res.status(401).json({
          success: false,
          message: 'Failed to find user',
        });
      } else if (!admin.isAdmin) {
        res.status(401).json({
          success: false,
          message: 'User not an admin',
        });
      } else if (!tokenValid) {
        res.status(401).json({
          success: false,
          message: 'Token not valid',
        });
      } else {
        let currentStamps = parseInt(user.current_stamps);
        if (currentStamps < 10) {
          let newTotal = currentStamps + parseInt(numberOfStamps);
          if (newTotal < 10) {
            // Updates the stamps amount
            // Updates the transactions array
            User.findOneAndUpdate(
              { customerId: customerId },
              {
                $set: { current_stamps: newTotal },
                $push: {
                  transactions: singleTransactionObject,
                },
              },
              { new: true },
              (err, user) => {
                if (err) {
                  res.status(401).json({
                    success: false,
                    message:
                      'Failed to add Stamp and update transactions array',
                    data: null,
                  });
                }
                res.status(200).json({
                  success: true,
                  message: 'Stamp added',
                  data: {},
                });
              }
            );
          }
          if (newTotal === 10) {
            // Updates the stamps amount
            // Updates the transactions array
            // Updates the completed cards array
            User.findOneAndUpdate(
              { customerId: customerId },
              {
                $set: { current_stamps: 0 },
                $push: {
                  transactions: singleTransactionObject,
                  completed_cards: completedCardObject,
                },
              },
              { new: true },
              (err, user) => {
                if (err) {
                  res.status(401).json({
                    success: false,
                    message:
                      'Failed to add Stamp and update transactions array for 10 stamps',
                    data: null,
                  });
                }
                res.status(200).json({
                  success: true,
                  message: 'User has freebie...',
                  data: {},
                });
              }
            );
          }
          if (newTotal > 10) {
            // Updates the stamps amount
            // Updates the transactions array
            // Updates the completed cards array
            User.findOneAndUpdate(
              { customerId: customerId },
              {
                $set: { current_stamps: newTotal - 10 },
                $push: {
                  transactions: singleTransactionObject,
                  completed_cards: completedCardObject,
                },
              },
              { new: true },
              (err, user) => {
                if (err) {
                  res.status(401).json({
                    success: false,
                    message:
                      'Failed to add Stamp and update transactions array for 10 stamps',
                    data: null,
                  });
                }
                res.status(200).json({
                  success: true,
                  message: 'User has freebie...',
                  data: {},
                });
              }
            );
          }
        } else if (currentStamps > 10) {
          res.status(401).json({
            success: false,
            message: 'To many stamps - something went wrong',
          });
        }
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        message:
          'General error adding stamp to user - Error on /api/v1/stamps/add-stamp/:customerId/:numberOfStamps',
        data: err,
      });
    }
  }
};
