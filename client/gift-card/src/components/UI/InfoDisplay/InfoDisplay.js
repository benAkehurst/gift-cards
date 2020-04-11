import React, { Component } from 'react';
import classes from './InfoDisplay.module.css';

class InfoDisplay extends Component {
  /**
   * Props:
   * children: Text placed between <InfoDisplay></InfoDisplay> tags
   */

  render() {
    return <p className={classes.InfoDispalay}>{this.props.children}</p>;
  }
}

export default InfoDisplay;
