import React, { Component } from 'react';
import classes from './Home.module.css';
import axios from '../../axios-connector';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Header from '../../components/UI/Header/Header';
import Banner from '../../components/UI/Banner/Banner';
import InfoDisplay from '../../components/UI/InfoDisplay/InfoDisplay';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Home}>
        <section className={classes.Header}>
          <Banner>Tasty Coffe Rewards</Banner>
          <Header userName={'Ben'}></Header>
        </section>
        <section className={classes.Card}>Card</section>
        <section className={classes.Controls}>Id & Button</section>
      </div>
    );
  }
}

export default withErrorHandler(Home, axios);
