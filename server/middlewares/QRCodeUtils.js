const QRCode = require('qrcode');

/**
 * Generates a QR Code from a unique id string
 * @param {string} externalUserId
 */
const generateQRCode = async (externalUserId) => {
  return QRCode.toDataURL(externalUserId)
    .then((encodedExternalUserId) => {
      return encodedExternalUserId;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = { generateQRCode };
