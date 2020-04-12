import React from 'react';
import History from './History';

export default {
  title: 'History',
};

const basicItems = [
  { id: '0', name: 'test 1', date: new Date() },
  { id: '1', name: 'test 2', date: new Date() },
  { id: '2', name: 'test 3', date: new Date() },
];

const completedCard = [
  { completed_date: '2020-04-04T13:40:53.812Z' },
  { completed_date: '2020-04-03T13:41:19.300Z' },
];

const stampsCard = [
  { stamp_count: 3, created_date: '2020-04-04T13:40:27.598Z' },
  { stamp_count: 2, created_date: '2020-04-03T13:40:27.598Z' },
  { stamp_count: 1, created_date: '2020-04-02T13:40:27.598Z' },
];

export const Basic = () => <History items={basicItems}></History>;
export const Completed = () => (
  <History
    items={completedCard}
    display={'completed'}
    title={'Completed Cards'}
  ></History>
);
export const Stamps = () => (
  <History
    items={stampsCard}
    display={'stamps'}
    title={'Stamps History'}
  ></History>
);
