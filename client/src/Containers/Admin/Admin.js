import React, { Component } from 'react';
import './Admin.scss';
import axios from '../../axios-connector';
import * as AppConfig from '../../config/AppConfig';
import { addStamp, logout } from '../../services/api/api';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { getUserId } from '../../Helpers/localStorage';

import QRCodeReader from '../../components/QRCodeReader/QRCodeReader';
import Banner from '../../components/UI/Banner/Banner';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import Error from '../../components/UI/Error/Error';

class Admin extends Component {
  state = {
    controls: {
      userId: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'User ID',
          label: 'User ID',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      stamps: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'Number of Stamps',
          label: 'Number of Stamps',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    isSaving: false,
    stampsSaved: false,
    successMessage: '',
    isError: false,
    errorMessage: '',
  };
  /**
   * Deals with how the inputs update the value on the state
   */
  inputChangedHandler = (event, controlName) => {
    this.setState({ stampsSaved: false });
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
  };

  /**
   * Called when user clicks button to submit login/register event
   */
  onSubmitHandler = () => {
    this.setState({ isSaving: true, stampsSaved: false });
    const id = getUserId();
    const data = {
      uniqueId: id,
      customerId: `_${this.state.controls.userId.value}`,
      stampsToAdd: this.state.controls.stamps.value,
      token: window.localStorage.getItem('token'),
    };
    addStamp(data).then((res) => {
      if (res.status === 401 || res.status === 500) {
        this.setState({
          isSaving: false,
          stampsSaved: false,
          isError: true,
          errorMessage: res.data.message,
        });
      } else {
        this.setState({
          isSaving: false,
          stampsSaved: true,
          isError: false,
          errorMessage: '',
          successMessage: res.message,
        });
      }
    });
  };

  clearMessage = () => {
    this.setState({
      stampsSaved: false,
      isError: false,
      errorMessage: '',
      successMessage: '',
    });
  };

  handleScanChange = (QRCodeId) => {
    const updatedControls = {
      ...this.state.controls,
      ['userId']: {
        ...this.state.controls['userId'],
        value: QRCodeId,
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
  };

  logoutUser = () => {
    logout();
    this.props.history.push({ pathname: '/auth' });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    const addStampForm = formElementsArray.map((formElement) => {
      return (
        <Input
          label={formElement.config.elementConfig.label}
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={(event) => this.inputChangedHandler(event, formElement.id)}
        />
      );
    });
    const addStampButton = (
      <Button btnType={'General'} clicked={this.onSubmitHandler}>
        ADD
      </Button>
    );
    const completed = <Banner>{this.state.successMessage}</Banner>;
    const failed = <Error errorText={this.state.errorMessage} />;
    return (
      <div className="Admin">
        <section className="Header">
          <Banner>{AppConfig.APP_NAME}</Banner>
          <h2>Admin Page</h2>
          <Button btnType="General" clicked={this.logoutUser}>
            Logout
          </Button>
          <h3>Add stamps below:</h3>
        </section>
        <section>
          <QRCodeReader onScanQrCode={this.handleScanChange} />
        </section>
        <section className="FormContainer">
          {addStampForm}
          {addStampButton}
        </section>
        {this.state.isSaving ? <Spinner size={'medium'} /> : null}
        <section onClick={this.clearMessage}>
          <section>{this.state.stampsSaved ? completed : null}</section>
          <section>{this.state.isError ? failed : null}</section>
        </section>
      </div>
    );
  }
}

export default withErrorHandler(Admin, axios);
