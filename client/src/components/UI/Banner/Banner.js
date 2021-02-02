import React, { Component } from 'react';
import './Banner.scss';

class Banner extends Component {
  render() {
    return <div className="Banner">{this.props.children}</div>;
  }
}

export default Banner;
