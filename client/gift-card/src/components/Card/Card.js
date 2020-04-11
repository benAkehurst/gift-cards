import React, { Component } from 'react';
import classes from './Card.module.css';

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
    if (this.props.currentStamps) {
      let stamps = this.renderStamps();
      let hasStamps = this.addStamps();
      allStamps.push(hasStamps, stamps);
    }
    return (
      <div className={classes.Card}>
        <div className={classes.StampContianer}>{allStamps}</div>
      </div>
    );
  }
}

export default Card;
