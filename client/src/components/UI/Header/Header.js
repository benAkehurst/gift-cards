import React, { Component } from 'react';
import './Header.scss';

import { getTimeOfDay } from '../../../Helpers/timeAndDate';

class Header extends Component {
  /**
   * Props:
   * userName: The name of the user
   */

  render() {
    return (
      <header className="Header">
        Good {getTimeOfDay()} {this.props.userName}!
      </header>
    );
  }
}

export default Header;
