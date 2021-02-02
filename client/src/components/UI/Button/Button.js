import React from 'react';
import './Button.scss';

/**
 * Props:
 * btnType: Defines specific button styling
 * clicked: emits a click event handler
 * children: Text placed between <Button></Button> tags
 */

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={['Button', [props.btnType]].join(' ')}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};
export default Button;
