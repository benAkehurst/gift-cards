import React, { Component } from 'react';
import './Layout.scss';
import Aux from '../Aux/Aux';
class Layout extends Component {
  render() {
    return (
      <Aux>
        <main className="Layout">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
