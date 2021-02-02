'use strict';
const mongoose = require('mongoose');
const { format } = require('date-fns');
const User = mongoose.model('User');

/**
 * Method to add stamp to user
 * GET
 * Params - /:customerId/:numberOfStamps:
 */
exports.add_stamp = async (req, res) => {
  const { customerId, numberOfStamps } = req.params;
  try {
    const user = await User.findOne({ customerId: customerId });
    if (!user) {
      res.status(401).json({
        success: false,
        message: 'Failed to find user',
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
          /**
           * Reset current_stamps to number past 10 - new total
           */
          User.updateOne(
            { customerId: customerId },
            { $set: { current_stamps: newTotal - 10 } },
            (err, done) => {
              if (err) {
                return res.status(500).json({
                  success: false,
                  title: 'Error reseting stamps new total',
                });
              }
            }
          );
          /**
           * Updates the completed card array
           */
          User.updateOne(
            { customerId: customerId },
            {
              $push: {
                completed_cards: {
                  completed_date: format(new Date(), 'dd/MM/yyyy'),
                },
              },
            },
            (err, done) => {
              if (err) {
                return res.status(500).json({
                  success: false,
                  title: 'Error adding completed card array',
                });
              }
            }
          );
          /**
           * Updates the transaction array
           */
          User.updateOne(
            { customerId: customerId },
            {
              $push: {
                transactions: {
                  stamp_count: parseInt(numberOfStamps),
                  created_date: format(new Date(), 'dd/MM/yyyy'),
                },
              },
            },
            (err, done) => {
              if (err) {
                return res.status(500).json({
                  success: false,
                  title: 'Error adding transaction',
                });
              }
            }
          );
          return res.status(200).json({
            success: true,
            title: 'Stamp added',
            data: {
              msg: 'User has freebie...',
            },
          });
        }
      } else {
        return res.status(500).json({
          success: false,
          title: 'Stamp count not valid',
          data: null,
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
};
