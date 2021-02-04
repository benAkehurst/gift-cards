const QRCode = require('qrcode');

/**
 * Generates a QR Code from a url string
 * @param {string} url
 */
const generateQRCode = async (url) => {
  console.log('url: ', url);
  return QRCode.toDataURL(url)
    .then((url) => {
      return url;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = { generateQRCode };
