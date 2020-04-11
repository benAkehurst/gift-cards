import React, { Component } from 'react';
import classes from './Stamp.module.css';

import Logo from '../../Logo/Logo';

class Stamp extends Component {
  render() {
    let hasStamp = false;
    if (this.props.hasStamp) {
      hasStamp = (
        <div className={classes.ShowStamp}>
          <Logo />
        </div>
      );
    }
    return <div className={classes.Stamp}>{hasStamp}</div>;
  }
}

export default Stamp;
