import React, { Component } from 'react';
import classes from './Input.module.css';

class Input extends Component {
  render() {
    let inputElement = null;
    let validationError = null;
    let inputClasses = [classes.InputElement];

    if (this.props.invalid && this.props.shouldValidate && this.props.touched) {
      inputClasses.push(classes.Invalid);
    }
    if (this.props.invalid && this.props.touched) {
      validationError = (
        <p className={classes.ValidationError}>
          Please enter a valid {this.props.elementConfig.name}
        </p>
      );
    }

    switch (this.props.elementType) {
      case 'input':
        inputElement = (
          <input
            className={inputClasses.join(' ')}
            {...this.props.elementConfig}
            value={this.props.value}
            onChange={this.props.changed}
            name={this.props.elementType}
          />
        );
        break;
      default:
        inputElement = (
          <input
            className={inputClasses.join(' ')}
            {...this.props.elementConfig}
            value={this.props.value}
            onChange={this.props.changed}
          />
        );
        break;
    }
    return (
      <div className={classes.Input}>
        <label className={classes.Label} for={this.props.elementType}>
          {this.props.label}
        </label>
        {inputElement}
        {validationError}
      </div>
    );
  }
}

export default Input;
