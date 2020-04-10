import React, { Component } from 'react';
import classes from './InfoDisplay.module.css';

class InfoDisplay extends Component {
  render() {
    return <p className={classes.InfoDispalay}>{this.props.children}</p>;
  }
}

export default InfoDisplay;
