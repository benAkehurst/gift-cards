import React from 'react';
import './Spinner.scss';

/**
 * Props:
 * size - MANDATORY PROP: 'small', 'medium' or 'large'
 */

const Spinner = (props) => (
  <div className="SpinnerWrapper">
    <div className={['Spinner', [props.size]].join(' ')}>Loading...</div>
  </div>
);

export default Spinner;
