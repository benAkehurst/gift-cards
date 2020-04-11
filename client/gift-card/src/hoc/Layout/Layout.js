import React, { Component } from 'react';
import classes from './Layout.module.css';
import Aux from '../Aux/Aux';
class Layout extends Component {
  render() {
    return (
      <Aux>
        <main className={classes.Layout}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
