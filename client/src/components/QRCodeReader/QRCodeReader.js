import React, { Component } from 'react';
import './QRCodeReader.scss';
import QrReader from 'react-qr-reader';

class QRCodeReader extends Component {
  state = {
    result: '',
  };

  handleScan = (data) => {
    if (data) {
      this.props.onScanQrCode(data);
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div className="camStyle">
        <QrReader
          className={this.props.size}
          delay={500}
          facingMode="environment"
          resolution={800}
          onError={this.handleError}
          onScan={this.handleScan}
        />
      </div>
    );
  }
}

export default QRCodeReader;
