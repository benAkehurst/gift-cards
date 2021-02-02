import React, { Component } from 'react';
import classes from './Spinner.module.css';

class Spinner extends Component {
  /**
   * Props:
   * size - MANDATORY PROP: 'small', 'medium' or 'large'
   */

  render() {
    return (
      <div className={[classes.Spinner, classes[this.props.size]].join(' ')}>
        Loading...
      </div>
    );
  }
}

export default Spinner;
