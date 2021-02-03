import React, { Component } from 'react';
import './Admin.scss';
import axios from '../../axios-connector';
import * as AppConfig from '../../config/AppConfig';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { getUserId } from '../../Helpers/localStorage';

import Banner from '../../components/UI/Banner/Banner';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

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
      _id: id,
      customerId: `_${this.state.controls.userId.value}`,
      stampsToAdd: this.state.controls.stamps.value,
    };
    axios
      .post('/stamps/add-stamp', data)
      .then((res) => {
        if (res.status === 200) {
          this.setState({ isSaving: false, stampsSaved: true });
        }
      })
      .catch((err) => {
        this.setState({ isSaving: false, stampsSaved: false });
      });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    const form = formElementsArray.map((formElement) => {
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
    const button = (
      <Button btnType={'General'} clicked={this.onSubmitHandler}>
        ADD
      </Button>
    );
    const completed = <Banner>Stamps added successfully</Banner>;
    return (
      <div className="Admin">
        <section className="Header">
          <Banner>{AppConfig.APP_NAME}</Banner>
          <h2>Admin Page</h2>
          <h3>Add stamps below:</h3>
        </section>
        <section className="FormContainer">
          {form}
          {button}
        </section>
        {this.state.isSaving ? <Spinner size={'medium'} /> : null}
        <section>{this.state.stampsSaved ? completed : null}</section>
      </div>
    );
  }
}

export default withErrorHandler(Admin, axios);
