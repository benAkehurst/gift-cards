import React from 'react';
import './Input.scss';
import * as AppConfig from '../../../config/AppConfig';

const Input = (props) => {
  const inputClasses = ['InputElement'];
  let inputElement = (
    <input
      className={inputClasses.join(' ')}
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed}
    />
  );
  let validationError = null;

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('Invalid');
  }
  if (props.invalid && props.touched) {
    validationError = null;
    if (props.elementConfig.label === 'Password') {
      validationError = (
        <p className="ValidationError">{AppConfig.PASSWORD_RULES}</p>
      );
    } else {
      validationError = (
        <p className="ValidationError">
          Please enter a valid {props.elementConfig.label}
        </p>
      );
    }
  }
  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default Input;
