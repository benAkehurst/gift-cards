import React, { Component } from 'react';
import './Stamp.scss';

import Logo from '../../Logo/Logo';

class Stamp extends Component {
  render() {
    let hasStamp = false;
    if (this.props.hasStamp) {
      hasStamp = (
        <div className="ShowStamp">
          <Logo />
        </div>
      );
    }
    return <div className="Stamp">{hasStamp}</div>;
  }
}

export default Stamp;
