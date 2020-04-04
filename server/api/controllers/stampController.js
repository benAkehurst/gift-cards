'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');
const Stamp = mongoose.model('Stamp');

let config = require('../../middlewares/config');

/**
 * Function to add a stamp to a user
 */
exports.add_stamp = (req, res) => {
  let customerId = req.body.customerId;
  User.findOne({ customerId: customerId }, (err, user) => {
    /**
     * Checks if user is an admin.
     * If false, error returned to user.
     */
    if (!user.isAdmin) {
      return res.status(401).json({
        success: false,
        title: 'Stamping failed',
        error: {
          error: err,
          message: 'User not valid'
        }
      });
    }
    return res.status(200).json({
      success: true,
      title: 'Stamp added',
      data: {}
    });
  });
  // User.findOne(
  //   {
  //     email: data.email
  //   },
  //   (err, user) => {
  //     if (err) {
  //       return res.status(500).json({
  //         success: false,
  //         title: 'An error occurred',
  //         error: err
  //       });
  //     }
  //     if (!user) {
  //       return res.status(401).json({
  //         success: false,
  //         title: 'Login failed',
  //         error: {
  //           message: 'Invalid login credentials'
  //         }
  //       });
  //     }
  //     if (!bcrypt.compareSync(data.password, user.password)) {
  //       return res.status(401).json({
  //         success: false,
  //         title: 'Login failed',
  //         error: {
  //           message: 'Invalid login credentials'
  //         }
  //       });
  //     }
  //     let token = jwt.sign({ username: user._id }, config.secret, {
  //       expiresIn: '24h' // expires in 24 hours
  //     });
  //     let userFiltered = _.pick(user.toObject(), [
  //       'name',
  //       'email',
  //       'created_date',
  //       '_id',
  //       'status'
  //     ]);
  //     res.status(200).json({
  //       message: 'Successfully logged in',
  //       success: true,
  //       obj: userFiltered,
  //       token: token
  //     });
  //   }
  // );
};
