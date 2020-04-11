import React, { Component } from 'react';
import classes from './Admin.module.css';
import axios from '../../axios-connector';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Admin extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Admin}>
        <h1>Admin</h1>
      </div>
    );
  }
}

export default withErrorHandler(Admin, axios);
