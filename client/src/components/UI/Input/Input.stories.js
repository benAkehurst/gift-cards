import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
};

let inputConfig = {
  elementType: 'input',
  elementConfig: {
    type: 'text',
    name: 'Name',
    placeholder: 'Name',
  },
  value: '',
  validatation: {
    required: true,
  },
  valid: false,
  touched: false,
};

function checkValidity(value, rules) {
  let isValid = true;
  if (!rules) {
    return true;
  }
  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  return isValid;
}

function inputChangedHandler(event, inputIdentifier) {
  const updatedOrderFrom = { ...inputConfig };
  const updatedFormElement = { ...updatedOrderFrom[inputIdentifier] };
  updatedFormElement.value = event.target.value;
  updatedFormElement.valid = checkValidity(
    updatedFormElement.value,
    updatedFormElement.validatation
  );
  updatedFormElement.touched = true;
  updatedOrderFrom[inputIdentifier] = updatedFormElement;
  let formIsValid = true;
  for (let inputIdentifier in updatedOrderFrom) {
    formIsValid = updatedOrderFrom[inputIdentifier].valid && formIsValid;
  }
  console.log(updatedOrderFrom, formIsValid);
}

export const Name = () => (
  <Input
    key={'1'}
    elementType={inputConfig.elementType}
    elementConfig={inputConfig.elementConfig}
    value={inputConfig.value}
    invalid={!inputConfig.valid}
    shouldValidate={inputConfig.validatation}
    touched={inputConfig.touched}
    changed={(event) => inputChangedHandler(event, 1)}
  />
);

export const Label = () => (
  <Input
    key={'1'}
    elementType={inputConfig.elementType}
    elementConfig={inputConfig.elementConfig}
    value={inputConfig.value}
    invalid={!inputConfig.valid}
    shouldValidate={inputConfig.validatation}
    touched={inputConfig.touched}
    changed={(event) => inputChangedHandler(event, 1)}
    label={'This is the label'}
  />
);
