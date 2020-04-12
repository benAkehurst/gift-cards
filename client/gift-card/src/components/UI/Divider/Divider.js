import React from 'react';
import classes from './Divider.module.css';

const divider = (props) => (
  <div className={[classes.Divider, classes[props.size]].join(' ')}></div>
);

export default divider;
