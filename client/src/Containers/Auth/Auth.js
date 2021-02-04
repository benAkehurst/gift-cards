import React, { Component } from 'react';
import './Auth.scss';
import axios from '../../axios-connector';
import * as AppConfig from '../../config/AppConfig';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { addAdminStatus, clearStorage } from '../../Helpers/localStorage';
import { login, createNewUser } from '../../services/api/api';

import Button from '../../components/UI/Button/Button';
import Banner from '../../components/UI/Banner/Banner';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import Error from '../../components/UI/Error/Error';

class Auth extends Component {
  state = {
    controls: {
      userName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your First Name',
          label: 'Name',
        },
        value: '',
        validation: {
          required: true,
          minLength: 3,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email Address',
          label: 'Email',
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
          label: 'Password',
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
    hasRegistered: false,
    isformValid: false,
    isLoading: false,
    showMessage: false,
    messageText: '',
  };

  componentDidMount() {
    clearStorage();
  }

  /**
   * Deals with how the inputs update the value on the state
   */
  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    };
    this.formValidHandler();
    this.setState({ controls: updatedControls });
  };

  /**
   * Checks form validity for submit button
   */
  formValidHandler = () => {
    if (
      this.state.controls.email.valid &&
      this.state.controls.email.value !== '' &&
      this.state.controls.password.valid &&
      this.state.controls.password.value !== ''
    ) {
      this.setState({ isformValid: true });
    }
  };

  /**
   * Handler for checking if an input is valid
   * @param {value of input field} value
   * @param {rules from state} rules
   */
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
      // eslint-disable-next-line
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isValid = pattern.test(value) && isValid;
    }
    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  }

  /**
   * Called when user clicks button to submit login/register event
   */
  onSubmitHandler = () => {
    if (this.state.isRegister) {
      let data = {
        name: this.state.controls.userName.value,
        email: this.state.controls.email.value,
        password: this.state.controls.password.value,
        password2: this.state.controls.password.value,
        acceptedTerms: true,
      };
      this.setState({ showLoader: true });
      createNewUser(data)
        .then((res) => {
          if (res.status === 201) {
            this.setState({
              showLoader: false,
              showMessage: false,
              isRegister: false,
              hasRegistered: true,
            });
          }
        })
        .catch((err) => {
          this.setState({
            showLoader: false,
            showMessage: true,
            isRegister: true,
          });
        });
    } else {
      let data = {
        email: this.state.controls.email.value,
        password: this.state.controls.password.value,
        rememberMe: true,
      };
      this.setState({ showLoader: true });
      login(data)
        .then((res) => {
          this.setState({ showLoader: false });
          if (res.status === 400) {
            this.setState({
              showMessage: true,
              messageText: res.data.message,
              isRegister: false,
            });
          }
          if (res.status === 200) {
            if (res.data.data.isAdmin) {
              addAdminStatus(true);
              this.props.history.push({ pathname: '/admin' });
            } else {
              addAdminStatus(false);
              this.props.history.push({ pathname: '/home' });
            }
          }
        })
        .catch((err) => {
          this.setState({
            showLoader: false,
            showMessage: true,
            isRegister: true,
          });
        });
    }
  };

  /**
   * Changes the from to/from login and register
   */
  changeFormHandler = () => {
    if (this.state.isRegister) {
      this.setState({ isRegister: false });
    } else if (!this.state.isRegister) {
      this.setState({ isRegister: true });
    }
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    const registerForm = formElementsArray.map((formElement) => {
      return (
        <Input
          label={formElement.config.elementConfig.label}
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
    const loginForm = formElementsArray.slice(1, 3).map((formElement) => {
      return (
        <Input
          label={formElement.config.elementConfig.label}
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
    const formButton = (
      <Button
        btnType="Login"
        disabled={!this.state.isformValid}
        clicked={this.onSubmitHandler}
      >
        {!this.state.isformValid ? 'Disabled' : 'Submit'}
      </Button>
    );
    return (
      <div className="Auth">
        <section className="Header">
          <Banner>{AppConfig.APP_NAME}</Banner>
        </section>
        <section className="FormContainer">
          <Button btnType="General" clicked={this.changeFormHandler}>
            Go to {this.state.isRegister ? 'Login' : 'Register'}
          </Button>
          <form className="FormElements">
            <h3>{!this.state.isRegister ? 'Login' : 'Register Now'}</h3>
            {this.state.isRegister ? registerForm : loginForm}
          </form>
          {formButton}
          {this.state.hasRegistered ? (
            <Banner>Thanks for registering, now login!</Banner>
          ) : null}
        </section>
        {this.state.messageText ? (
          <Error errorText={this.state.messageText} />
        ) : null}
        {this.state.showLoader ? <Spinner size="medium" /> : null}
      </div>
    );
  }
}

export default withErrorHandler(Auth, axios);
