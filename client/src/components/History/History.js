import React from 'react';
import './History.scss';

import { dateFormatter } from '../../Helpers/timeAndDate';

const History = (props) => {
  /**
   * Props:
   * historyData - data to display
   * title - a title to display
   * display - what data to display
   */

  let itemsList = null;
  switch (props.display) {
    case 'completed':
      itemsList = props.historyData
        .slice(0)
        .reverse()
        .map((item) => {
          return (
            <li key={item.completed_date}>
              {dateFormatter(item.completed_date)}
            </li>
          );
        });
      break;
    case 'stamps':
      itemsList = props.historyData
        .slice(0)
        .reverse()
        .map((item) => {
          return (
            <li key={item.created_date}>
              {dateFormatter(item.created_date)} - {item.stamp_count}{' '}
              {item.stamp_count > 1 ? <span>Stamps</span> : <span>Stamp</span>}
            </li>
          );
        });
      break;
    default:
      itemsList = <li>Nothing to display</li>;
      break;
  }

  return (
    <div className="History">
      <p>{props.title}</p>
      <ul>{itemsList}</ul>
    </div>
  );
};

export default History;
