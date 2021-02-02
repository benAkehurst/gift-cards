import React from 'react';
import './Card.scss';

import Stamp from './Stamp/Stamp';
import { completeOfferText } from '../../Helpers/offers';
import { tooManyStamps } from '../../Helpers/errors';

const Card = (props) => {
  // Method to render stamps that exist
  const renderStamps = () => {
    let stamps = [];
    let countNumber = 10 - props.currentStamps;
    for (let i = 0; i < countNumber; i++) {
      stamps.push(<Stamp key={i} hasStamp={false} />);
    }
    return stamps;
  };

  // Method to render stamps that exist
  const addStamps = () => {
    let stamps = [];
    for (let i = 0; i < props.currentStamps; i++) {
      stamps.push(<Stamp key={i} hasStamp={true} />);
    }
    return stamps;
  };

  let allStamps = [];
  if (props.currentStamps < 10) {
    let stamps = renderStamps();
    let hasStamps = addStamps();
    allStamps.push(hasStamps, stamps);
  }

  return (
    <div className="Card">
      <div className="StampContainer">
        {allStamps}
        {props.currentStamps === 10 ? completeOfferText() : null}
        {props.currentStamps > 10 ? tooManyStamps() : null}
      </div>
    </div>
  );
};

export default Card;
