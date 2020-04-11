import React, { Component } from 'react';
import classes from './Home.module.css';
import axios from '../../axios-connector';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Header from '../../components/UI/Header/Header';
import Banner from '../../components/UI/Banner/Banner';
import InfoDisplay from '../../components/UI/InfoDisplay/InfoDisplay';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/Card/Card';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Home}>
        <section className={classes.Header}>
          <Banner>Tasty Coffe Rewards</Banner>
          <Header userName={'Ben'}></Header>
          <section className={classes.Card}>
            <Card></Card>
          </section>
        </section>
        <section className={classes.Controls}>
          <InfoDisplay>ID - AAAA</InfoDisplay>
          <Button btnType={'General'}>Account</Button>
        </section>
      </div>
    );
  }
}

export default withErrorHandler(Home, axios);
