import React, { Component } from 'react';
import classes from './Home.module.css';
import axios from '../../axios-connector';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { getUserId } from '../../Helpers/localStorage';

import Header from '../../components/UI/Header/Header';
import Banner from '../../components/UI/Banner/Banner';
import InfoDisplay from '../../components/UI/InfoDisplay/InfoDisplay';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/Card/Card';

class Home extends Component {
  state = {
    name: null,
    currentStamps: 0,
    completedCards: null,
    transactions: null,
    appId: null,
    isLoading: false,
  };

  componentDidMount() {
    const _id = getUserId();
    if (!_id) {
      this.props.history.push({ pathname: '/auth' });
    }
    axios
      .get(`/user/${_id}`)
      .then((res) => {
        if (res.data.data) {
          this.setState({
            name: res.data.data.name,
            currentStamps: res.data.data.current_stamps,
            completedCards: res.data.data.completed_cards,
            transactions: res.data.data.transactions,
            appId: res.data.data.customerId,
            isLoading: false,
          });
        }
      })
      .catch((err) => {
        this.setState({ error: true, isLoading: false });
        console.log(err);
      });
  }

  goToAccountHandler = (link) => {
    this.props.history.push({
      pathname: `/${link}`,
      state: {
        completedCards: this.state.completedCards,
        transactions: this.state.transactions,
        appId: this.state.appId,
      },
    });
  };

  render() {
    return (
      <div className={classes.Home}>
        <section className={classes.Header}>
          <Banner>Tasty Coffe Rewards</Banner>
          <Header userName={this.state.name}></Header>
          <section className={classes.Card}>
            <Card currentStamps={this.state.currentStamps}></Card>
          </section>
        </section>
        <section className={classes.Controls}>
          <InfoDisplay dispStr={this.state.appId}></InfoDisplay>
          <Button
            btnType={'General'}
            clicked={() => this.goToAccountHandler('account')}
          >
            Account
          </Button>
        </section>
      </div>
    );
  }
}

export default withErrorHandler(Home, axios);
