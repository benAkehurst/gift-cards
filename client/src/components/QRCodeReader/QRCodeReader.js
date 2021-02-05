import React, { Component } from 'react';
import './QRCodeReader.scss';
import QrReader from 'react-qr-reader';

class QRCodeReader extends Component {
  state = {
    result: 'No result',
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
          className="previewStyle"
          delay={500}
          facingMode="environment"
          resolution={800}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QRCodeReader;
