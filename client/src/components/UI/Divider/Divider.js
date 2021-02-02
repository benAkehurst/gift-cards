import React from 'react';
import './Divider.scss';

const divider = (props) => (
  <div className={['Divider', [props.size]].join(' ')}></div>
);

export default divider;
