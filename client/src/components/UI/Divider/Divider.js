import React from 'react';
import './Divider.scss';

const Divider = (props) => (
  <div className={['Divider', [props.size]].join(' ')}></div>
);

export default Divider;
