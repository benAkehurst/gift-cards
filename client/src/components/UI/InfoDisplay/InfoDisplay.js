import React from 'react';
import './InfoDisplay.scss';

/**
 * Props:
 * children: Text placed between <InfoDisplay></InfoDisplay> tags
 */

const InfoDisplay = (props) => {
  return <p className="InfoDisplay">ID - {props.dispStr}</p>;
};

export default InfoDisplay;
