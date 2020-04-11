import React, { Component } from 'react';
import classes from './Card.module.css';

import { completeOfferText } from '../../Helpers/offers';
import { tooManyStamps } from '../../Helpers/errors';

import Stamp from './Stamp/Stamp';

class Card extends Component {
  /**
   * Props:
   */

  renderStamps = () => {
    let stamps = [];
    let countNumber = 10 - this.props.currentStamps;
    for (let i = 0; i < countNumber; i++) {
      stamps.push(<Stamp key={i} hasStamp={false} />);
    }
    return stamps;
  };

  addStamps = () => {
    let stamps = [];
    for (let i = 0; i < this.props.currentStamps; i++) {
      stamps.push(<Stamp key={i} hasStamp={true} />);
    }
    return stamps;
  };

  render() {
    let allStamps = [];
    if (this.props.currentStamps < 10) {
      let stamps = this.renderStamps();
      let hasStamps = this.addStamps();
      allStamps.push(hasStamps, stamps);
    }
    return (
      <div className={classes.Card}>
        <div className={classes.StampContianer}>
          {allStamps}
          {this.props.currentStamps === 10 ? completeOfferText() : null}
          {this.props.currentStamps > 10 ? tooManyStamps() : null}
        </div>
      </div>
    );
  }
}

export default Card;
