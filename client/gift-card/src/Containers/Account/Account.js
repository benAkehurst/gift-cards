import React, { Component } from 'react';
import classes from './Account.module.css';
import axios from '../../axios-connector';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { getUserId } from '../../Helpers/localStorage';

import Banner from '../../components/UI/Banner/Banner';
import InfoDisplay from '../../components/UI/InfoDisplay/InfoDisplay';
import Button from '../../components/UI/Button/Button';
import History from '../../components/History/History';
import Divider from '../../components/UI/Divider/Divider';

class Account extends Component {
  goBackHandler = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    const _id = getUserId();
    if (!_id) {
      this.props.history.push({ pathname: '/auth' });
    }
  }

  render() {
    return (
      <div className={classes.Account}>
        <section className={classes.Header}>
          <Banner>Tasty Coffe Rewards</Banner>
        </section>
        <section className={classes.HistoryContainer}>
          <History
            historyData={this.props.location.state.transactions}
            title={'Stamps'}
            display={'stamps'}
          />
          <Divider size={'small'} />
          <History
            historyData={this.props.location.state.completedCards}
            title={'Completed Cards'}
            display={'completed'}
          />{' '}
        </section>
        <section className={classes.Controls}>
          <InfoDisplay dispStr={this.props.location.state.appId}></InfoDisplay>
          <Button btnType={'General'} clicked={this.goBackHandler}>
            Account
          </Button>
        </section>
      </div>
    );
  }
}

export default withErrorHandler(Account, axios);
