'use strict';
const mongoose = require('mongoose');
const { format } = require('date-fns');
const { checkToken } = require('../../middlewares/validators');
const User = mongoose.model('User');

/**
 * Method to add stamp to user
 * POST
 * Params - /:customerId/:numberOfStamps/:token
 */
exports.add_stamp = async (req, res) => {
  const { customerId, numberOfStamps, token } = req.params;
  if (!customerId || !numberOfStamps || !token) {
    res.status(400).json({
      success: false,
      message: 'Please provide all required fields',
      data: null,
    });
  } else {
    try {
      const user = await User.findOne({ customerId: customerId });
      const tokenValid = await checkToken(token);
      if (!user) {
        res.status(401).json({
          success: false,
          message: 'Failed to find user',
        });
      } else if (!user.isAdmin) {
        res.status(401).json({
          success: false,
          message: 'User is not admin',
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
                  transactions: {
                    stamp_count: parseInt(numberOfStamps),
                    created_date: format(new Date(), 'dd/MM/yyyy'),
                  },
                },
              },
              { new: true },
              (err, user) => {
                if (err) {
                  res.status(401).json({
                    success: false,
                    title: 'Failed to add Stamp and update transactions array',
                    data: null,
                  });
                }
                res.status(200).json({
                  success: true,
                  title: 'Stamp added',
                  data: {
                    current_stamps: user.current_stamps,
                    transactions: user.transactions,
                  },
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
                  transactions: {
                    stamp_count: parseInt(numberOfStamps),
                    created_date: format(new Date(), 'dd/MM/yyyy'),
                  },
                  completed_cards: {
                    completed_date: format(new Date(), 'dd/MM/yyyy'),
                  },
                },
              },
              { new: true },
              (err, user) => {
                if (err) {
                  res.status(401).json({
                    success: false,
                    title:
                      'Failed to add Stamp and update transactions array for 10 stamps',
                    data: null,
                  });
                }
                res.status(200).json({
                  success: true,
                  message: 'Stamp added',
                  data: {
                    current_stamps: user.current_stamps,
                    msg: 'User has freebie...',
                  },
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
                  completed_cards: {
                    completed_date: format(new Date(), 'dd/MM/yyyy'),
                  },
                  transactions: {
                    stamp_count: parseInt(numberOfStamps),
                    created_date: format(new Date(), 'dd/MM/yyyy'),
                  },
                },
              },
              { new: true },
              (err, user) => {
                if (err) {
                  res.status(401).json({
                    success: false,
                    title:
                      'Failed to add Stamp and update transactions array for 10 stamps',
                    data: null,
                  });
                }
                res.status(200).json({
                  success: true,
                  message: 'Stamp added',
                  data: {
                    current_stamps: user.current_stamps,
                    msg: 'User has freebie...',
                  },
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
