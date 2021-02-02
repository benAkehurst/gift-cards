import React from 'react';
import './Logo.scss';
import logo from '../../assets/images/coffee-logo.png';

const Logo = () => (
  <div className="Logo">
    <img src={logo} alt="Company Logo" />
  </div>
);

export default Logo;
