import React, { Component } from 'react';
import classes from './Auth.module.css';
import axios from '../../axios-connector';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Auth extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Auth}>
        <h1>Auth</h1>
      </div>
    );
  }
}

export default withErrorHandler(Auth, axios);
