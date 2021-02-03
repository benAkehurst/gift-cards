import React, { useEffect } from 'react';
import './Account.scss';
import * as AppConfig from '../../config/AppConfig';
import axios from '../../axios-connector';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { getUserId } from '../../Helpers/localStorage';

import Banner from '../../components/UI/Banner/Banner';
import InfoDisplay from '../../components/UI/InfoDisplay/InfoDisplay';
import Button from '../../components/UI/Button/Button';
import History from '../../components/History/History';
import Divider from '../../components/UI/Divider/Divider';

const Account = (props) => {
  const { history } = props;

  useEffect(() => {
    const _id = getUserId();
    if (!_id) {
      history.push({ pathname: '/auth' });
    }
  }, [history]);

  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <div className="Account">
      <section className="Header">
        <Banner>{AppConfig.APP_NAME}</Banner>
      </section>
      <section className="HistoryContainer">
        <History
          historyData={props.location.state.transactions}
          title="Stamps"
          display="stamps"
        />
        <Divider size="small" />
        <History
          historyData={props.location.state.completedCards}
          title="Completed Cards"
          display="completed"
        />
      </section>
      <section className="Controls">
        <InfoDisplay dispStr={props.location.state.appId}></InfoDisplay>
        <Button btnType="General" clicked={goBackHandler}>
          Back
        </Button>
      </section>
    </div>
  );
};

export default withErrorHandler(Account, axios);
