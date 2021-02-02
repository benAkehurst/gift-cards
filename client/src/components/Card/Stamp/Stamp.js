import React from 'react';
import './Stamp.scss';

import Logo from '../../Logo/Logo';

const Stamp = (props) => {
  let hasStamp = false;
  if (props.hasStamp) {
    hasStamp = (
      <div className="ShowStamp">
        <Logo />
      </div>
    );
  }
  return <div className="Stamp">{hasStamp}</div>;
};

export default Stamp;
