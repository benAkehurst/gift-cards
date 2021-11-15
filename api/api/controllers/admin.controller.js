'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');

/**
 * Allows admin to see all users
 */
exports.get_all_users = async (req, res) => {};
exports.change_user_roll = async (req, res) => {};
exports.get_single_user = async (req, res) => {};
exports.delete_single_user = async (req, res) => {};
