import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'Spinner',
};

export const Small = () => <Spinner size={'small'} />;
export const Medium = () => <Spinner size={'medium'} />;
export const Large = () => <Spinner size={'large'} />;
