import React from 'react';
import './InfoDisplay.scss';

/**
 * Props:
 * children: Text placed between <InfoDisplay></InfoDisplay> tags
 */

const InfoDisplay = (props) => {
  let appId = null;
  if (props.dispStr) {
    appId = props.dispStr.substr(1);
  }
  return <p className="InfoDisplay">ID - {appId}</p>;
};

export default InfoDisplay;
