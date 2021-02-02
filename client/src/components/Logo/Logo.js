import React, { Component } from 'react';
import classes from './Logo.module.css';
import logo from '../../assets/images/coffee-logo.png';

class Logo extends Component {
  render() {
    return (
      <div className={classes.Logo}>
        <img src={logo} alt="Company Logo" />
      </div>
    );
  }
}

export default Logo;
