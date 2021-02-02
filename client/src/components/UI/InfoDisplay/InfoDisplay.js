import React, { Component } from 'react';
import './InfoDisplay.scss';

class InfoDisplay extends Component {
  /**
   * Props:
   * children: Text placed between <InfoDisplay></InfoDisplay> tags
   */

  render() {
    let appId = null;
    if (this.props.dispStr) {
      appId = this.props.dispStr.substr(1);
    }
    return <p className="InfoDisplay">ID - {appId}</p>;
  }
}

export default InfoDisplay;
