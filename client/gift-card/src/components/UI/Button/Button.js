import React, { Component } from 'react';
import classes from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <button
        className={[classes.Button, classes[this.props.btnType]].join(' ')}
        onClick={this.props.clicked}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
