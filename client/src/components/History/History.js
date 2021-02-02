import React, { Component } from 'react';
import './History.scss';

import { dateFormatter } from '../../Helpers/timeAndDate';

class History extends Component {
  /**
   * Props:
   * historyData - data to display
   * title - a title to display
   * display - what data to display
   */

  render() {
    let itemsList = null;
    switch (this.props.display) {
      case 'completed':
        itemsList = this.props.historyData
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
        itemsList = this.props.historyData
          .slice(0)
          .reverse()
          .map((item) => {
            return (
              <li key={item.created_date}>
                {dateFormatter(item.created_date)} - {item.stamp_count}{' '}
                {item.stamp_count > 1 ? (
                  <span>Stamps</span>
                ) : (
                  <span>Stamp</span>
                )}
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
        <p>{this.props.title}</p>
        <ul>{itemsList}</ul>
      </div>
    );
  }
}

export default History;
