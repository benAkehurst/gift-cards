import React from 'react';
import './History.scss';

const History = (props) => {
  /**
   * Props:
   * historyData - data to display
   * title - a title to display
   * display - what data to display
   */

  let itemsList = null;
  switch (props.display) {
    case 'stamps':
      itemsList = props.historyData
        .slice(0)
        .reverse()
        .map((item) => {
          return (
            <li key={item.transaction_id}>
              <div className="singleStampInfo">
                <div>
                  <p>Time: {item.created_time}</p>
                  <p>Date: {item.created_date}</p>
                  <p>Stamps Received: {item.stamp_count}</p>
                </div>
              </div>
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
      {props.historyData.length > 3 ? <h2>Scroll to see more</h2> : null}
      <h3>{props.title}</h3>
      <ul>{itemsList}</ul>
    </div>
  );
};

export default History;
