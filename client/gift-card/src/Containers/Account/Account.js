import React, { Component } from 'react';
import classes from './Account.module.css';
import axios from '../../axios-connector';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Account extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Account}>
        <h1>Account</h1>
      </div>
    );
  }
}

export default withErrorHandler(Account, axios);
