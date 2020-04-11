import React, { Component } from 'react';
import classes from './Card.module.css';
import axios from '../../axios-connector';

import Stamp from './Stamp/Stamp';
import Spinner from '../UI/Spinner/Spinner';

class Card extends Component {
  /**
   * Props:
   */

  state = {
    currentStamps: 0,
    completedCards: null,
    transactions: null,
    isLoading: false,
    error: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get('/user/5e8877c4632bda97ed6a934a')
      .then((res) => {
        if (res.data.data) {
          this.setState({
            currentStamps: res.data.data.current_stamps,
            completedCards: res.data.data.completed_cards,
            transactions: res.data.data.transactions,
            isLoading: false,
          });
        }
      })
      .catch((err) => {
        this.setState({ error: true, isLoading: false });
        console.log(err);
      });
  }

  renderStamps = () => {
    let stamps = [];
    let countNumber = 10 - this.state.currentStamps;
    for (let i = 0; i < countNumber; i++) {
      stamps.push(<Stamp key={i} hasStamp={false} />);
    }
    return stamps;
  };

  addStamps = () => {
    let stamps = [];
    for (let i = 0; i < this.state.currentStamps; i++) {
      stamps.push(<Stamp key={i} hasStamp={true} />);
    }
    return stamps;
  };

  render() {
    let allStamps = [];
    let messages = null;
    if (this.state.isLoading) {
      messages = <Spinner size={'medium'} />;
    }
    if (this.state.error) {
      messages = <p>Something went wrong. Try reloading.</p>;
    }
    if (!this.state.isLoading) {
      let stamps = this.renderStamps();
      let hasStamps = this.addStamps();
      allStamps.push(hasStamps, stamps);
    }
    return (
      <div className={classes.Card}>
        <div className={classes.StampContianer}>
          {messages}
          {allStamps}
        </div>
      </div>
    );
  }
}

export default Card;
