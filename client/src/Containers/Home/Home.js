import React, { useState, useEffect } from 'react';
import './Home.scss';
import axios from '../../axios-connector';
import * as AppConfig from '../../config/AppConfig';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { getUserId } from '../../Helpers/localStorage';

import Header from '../../components/UI/Header/Header';
import Banner from '../../components/UI/Banner/Banner';
import InfoDisplay from '../../components/UI/InfoDisplay/InfoDisplay';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/Card/Card';

const Home = (props) => {
  const [name, setName] = useState(null);
  const [currentStamps, setCurrentStamps] = useState(0);
  const [completedCards, setCompletedCards] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [appId, setAppId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const _id = getUserId();
    if (!_id) {
      props.history.push({ pathname: '/auth' });
    }
    axios
      .get(`/user/${_id}`)
      .then((res) => {
        if (res.data.data) {
          setName(res.data.data.name);
          setCurrentStamps(res.data.data.current_stamps);
          setCompletedCards(res.data.data.completed_cards);
          setTransactions(res.data.data.transactions);
          setAppId(res.data.data.customerId);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(false);
        console.log(err);
      });
  }, []);

  const goToAccountHandler = (link) => {
    props.history.push({
      pathname: `/${link}`,
      state: {
        completedCards: completedCards,
        transactions: transactions,
        appId: appId,
      },
    });
  };

  return (
    <div className="Home">
      <section className="Header">
        <Banner>{AppConfig.APP_NAME}</Banner>
        <Header userName={name}></Header>
        <section className="Card">
          <Card currentStamps={currentStamps}></Card>
        </section>
      </section>
      <section className="Controls">
        <InfoDisplay dispStr={appId}></InfoDisplay>
        <Button
          btnType={'General'}
          clicked={() => goToAccountHandler('account')}
        >
          Account
        </Button>
      </section>
    </div>
  );
};

export default withErrorHandler(Home, axios);
