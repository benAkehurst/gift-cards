import React, { Component } from 'react';
import classes from './Auth.module.css';
import axios from '../../axios-connector';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import { getUserId } from '../../Helpers/localStorage';

import Button from '../../components/UI/Button/Button';
import Banner from '../../components/UI/Banner/Banner';
class Auth extends Component {
  state = {
    isRegister: true,
  };

  componentWillMount() {
    if (getUserId()) {
      this.setState({
        isRegister: false,
      });
    }
  }

  loginHandler = () => {};

  registerHandler = () => {};

  render() {
    let button = (
      <Button btnType={'General'} clicked={this.loginHandler}>
        Login
      </Button>
    );
    if (this.state.isRegister) {
      button = (
        <Button btnType={'General'} clicked={this.registerHandler}>
          Register
        </Button>
      );
    }
    return (
      <div className={classes.Auth}>
        <section className={classes.Header}>
          <Banner>Tasty Coffe Rewards</Banner>
        </section>
        <section className={classes.FormContainer}>Form</section>
        <section className={classes.Button}>{button}</section>
      </div>
    );
  }
}

export default withErrorHandler(Auth, axios);
