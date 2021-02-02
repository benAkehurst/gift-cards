import React, { Component } from 'react';
import './Spinner.scss';

class Spinner extends Component {
  /**
   * Props:
   * size - MANDATORY PROP: 'small', 'medium' or 'large'
   */

  render() {
    return (
      <div className={['Spinner', [this.props.size]].join(' ')}>Loading...</div>
    );
  }
}

export default Spinner;
