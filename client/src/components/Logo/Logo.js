import React, { Component } from 'react';
import './Logo.scss';
import logo from '../../assets/images/coffee-logo.png';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <img src={logo} alt="Company Logo" />
      </div>
    );
  }
}

export default Logo;
