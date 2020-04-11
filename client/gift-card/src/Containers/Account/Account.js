import React, { Component } from 'react';
import classes from './Account.module.css';
import axios from '../../axios-connector';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Account extends Component {
  state = {
    completedCards: null,
    transactions: null,
  };

  componentDidMount() {
    console.log(this.props.location.state);
    this.setState({
      completedCards: [...this.props.location.state.completedCards],
      transactions: [...this.props.location.state.transactions],
    });
  }
  render() {
    return (
      <div className={classes.Account}>
        <h1>Account</h1>
        {this.state.completedCards ? (
          <ul>
            <li>{this.state.transactions[0].created_date}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default withErrorHandler(Account, axios);
