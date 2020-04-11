import React from 'react';
import Card from './Card';

export default {
  title: 'Card',
};

export const Basic = () => <Card></Card>;
export const FiveStamps = () => <Card currentStamps={5}></Card>;
export const TenStamps = () => <Card currentStamps={10}></Card>;
export const OverTenStamps = () => <Card currentStamps={11}></Card>;
