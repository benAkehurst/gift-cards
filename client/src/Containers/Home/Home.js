import React, { useState, useEffect } from 'react';
import './Home.scss';
import '../../globals.scss';
import axios from '../../axios-connector';
import * as AppConfig from '../../config/AppConfig';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { fetchUserInfo, checkUserLoggedIn } from '../../services/api/api';

import WelcomeBar from '../../components/UI/WelcomeBar/WelcomeBar';
import Banner from '../../components/UI/Banner/Banner';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import Error from '../../components/UI/Error/Error';
import Card from '../../components/Card/Card';
import QRCodeReader from '../../components/QRCodeReader/QRCodeReader';
import PullToRefresh from 'react-simple-pull-to-refresh';

const Home = (props) => {
  const { history } = props;
  const [name, setName] = useState(null);
  const [qrCode, setQRCode] = useState('');
  const [qrCodeReader, setQrCodeReader] = useState(false);
  const [currentStamps, setCurrentStamps] = useState(0);
  const [completedCards, setCompletedCards] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [appId, setAppId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!checkUserLoggedIn()) {
      history.push({ pathname: '/auth' });
    }
    setIsLoading(true);
    fetchUserInfo()
      .then((res) => {
        if (!res.success) {
          setIsLoading(false);
          setIsError(true);
          setTimeout(() => {
            history.push({ pathname: '/auth' });
          }, 2000);
        } else if (res.success) {
          setName(res.data.firstName);
          setCurrentStamps(res.data.current_stamps);
          setCompletedCards(res.data.completed_cards);
          setTransactions(res.data.transactions);
          setAppId(res.data.customerId);
          setQRCode(res.data.qrCode);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [history]);

  const goToAccountHandler = (link) => {
    props.history.push({
      pathname: `/${link}`,
      state: {
        completedCards: completedCards,
        transactions: transactions,
        appId: appId,
        qrCode: qrCode,
      },
    });
  };

  const handleRefresh = () => {
    return fetchUserInfo()
      .then((res) => {
        if (!res.success) {
          setIsLoading(false);
          setIsError(true);
          setTimeout(() => {
            history.push({ pathname: '/auth' });
          }, 2000);
        } else if (res.success) {
          setIsLoading(false);
          setCurrentStamps(res.data.current_stamps);
          setCompletedCards(res.data.completed_cards);
          setTransactions(res.data.transactions);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(false);
        console.log(err);
      });
  };

  const handleScanChange = (QRCodeId) => {
    // let r = Math.random().toString(36).substring(3) <-- random string
    console.log('QRCodeId: ', QRCodeId);

    /**
     * Logic
     * user scans staff qr code with is a random string
     * user posts string, userID, token to the server
     * server checks string is valid
     * if yes, add stamp
     * if no, send error
     * stamp added, send response back to client and update stamps card
     */
  };

  const showQrCodeScanner = () => {
    if (qrCodeReader) {
      setQrCodeReader(false);
    } else {
      setQrCodeReader(true);
    }
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="Home">
        {isLoading && <Spinner size="large" />}
        {isError && <Error errorText={AppConfig.GENERAL_APP_ERROR} />}
        <section className="Header">
          <Banner>{AppConfig.APP_NAME}</Banner>
          <WelcomeBar userName={name} />
          <button onClick={showQrCodeScanner} className="Button General">
            {!qrCodeReader ? 'Open' : 'Close'} Code Scanner
          </button>
        </section>
        {qrCodeReader ? (
          <section>
            <QRCodeReader onScanQrCode={handleScanChange} size="UserStyle" />
          </section>
        ) : null}
        <section>
          <Card currentStamps={currentStamps} />
        </section>
        <section className="Controls">
          <Button
            btnType="General"
            clicked={() => goToAccountHandler('account')}
          >
            Account
          </Button>
        </section>
      </div>
    </PullToRefresh>
  );
};

export default withErrorHandler(Home, axios);
