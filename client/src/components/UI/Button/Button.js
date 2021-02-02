import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  /**
   * Props:
   * btnType: Defines specific button styleing
   * clicked: emits a click event handler
   * children: Text placed between <Button></Button> tags
   */

  render() {
    return (
      <button
        disabled={this.props.disabled}
        className={['Button', [this.props.btnType]].join(' ')}
        onClick={this.props.clicked}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
