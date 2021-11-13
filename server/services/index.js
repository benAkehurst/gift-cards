const email = require('../../services/email');
const qr = require('../../services/qr');
const validators = require('../../services/validators');

module.exports = {
  ...email,
  ...qr,
  ...validators,
};
