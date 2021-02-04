import React from 'react';
import './QRCode.scss';

const QRCode = (props) => {
  return <img id="qrCodeImage" src={props.qrCodeURI} alt="Menu QR Code" />;
};

export default QRCode;
