const code = require('./code.model');
const stamp = require('./stamp.model');
const store = require('./store.model');
const task = require('./task.model');
const user = require('./user.model');

module.exports = {
  ...code,
  ...stamp,
  ...store,
  ...task,
  ...user,
};
