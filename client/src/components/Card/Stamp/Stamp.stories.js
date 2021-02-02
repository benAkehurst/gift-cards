import React from 'react';
import Stamp from './Stamp';

export default {
  title: 'Stamp',
};

export const HasStamp = () => <Stamp hasStamp={true}></Stamp>;
export const NoStamp = () => <Stamp hasStamp={false}></Stamp>;
