import React from 'react';
import './Stamp.scss';

import Logo from '../../Logo/Logo';

const Stamp = (props) => {
  return (
    <div className="Stamp">
      {props.hasStamp ? (
        <div className="ShowStamp">
          <Logo />
        </div>
      ) : null}
    </div>
  );
};

export default Stamp;
