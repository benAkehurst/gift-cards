import React from 'react';
import './Account.scss';
import * as AppConfig from '../../config/AppConfig';
import axios from '../../axios-connector';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { logout } from '../../services/api/api';
import Banner from '../../components/UI/Banner/Banner';
import InfoDisplay from '../../components/UI/InfoDisplay/InfoDisplay';
import Button from '../../components/UI/Button/Button';
import History from '../../components/History/History';

const Account = (props) => {
  const { history } = props;

  const goBackHandler = () => {
    history.goBack();
  };

  const logoutUser = () => {
    logout();
    history.push({ pathname: '/auth' });
  };

  return (
    <div className="Account">
      <section className="Header">
        <Banner>{AppConfig.APP_NAME}</Banner>
      </section>
      <section className="HistoryContainer">
        <Button btnType="General" clicked={logoutUser}>
          Logout
        </Button>
        <History
          historyData={props.location.state.transactions}
          title="Stamps"
          display="stamps"
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
