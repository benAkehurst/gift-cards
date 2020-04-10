import React, { Component } from 'react';
import classes from './Header.module.css';

class Header extends Component {
  render() {
    return <header className={classes.Header}>{this.props.children}</header>;
  }
}

export default Header;
