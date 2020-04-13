import React, { Component } from 'react';
import classes from './Auth.module.css';
import axios from '../../axios-connector';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Button from '../../components/UI/Button/Button';
import Banner from '../../components/UI/Banner/Banner';
import Input from '../../components/UI/Input/Input';
class Auth extends Component {
  state = {
    controls: {
      userName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your First Name',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email Address',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Your Password',
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isRegister: true,
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderFrom = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderFrom[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validatation
    );
    updatedFormElement.touched = true;
    updatedOrderFrom[inputIdentifier] = updatedFormElement;
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderFrom) {
      formIsValid = updatedOrderFrom[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderFrom, formIsValid: formIsValid });
  };

  checkValidity(value, rules) {
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
    if (rules.isEmail) {
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isValid = pattern.test(value) && isValid;
    }
    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    const form = formElementsArray.map((formElement) => {
      return (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => this.inputChangedHandler(event, formElement.id)}
        />
      );
    });
    return (
      <div className={classes.Auth}>
        <section className={classes.Header}>
          <Banner>Tasty Coffe Rewards</Banner>
        </section>
        <section className={classes.FormContainer}>
          <h3>Sign Up</h3>
          <form>
            {form}
            <Button btnType={'General'}>Submit</Button>
          </form>
        </section>
      </div>
    );
  }
}

export default withErrorHandler(Auth, axios);
