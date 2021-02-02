import React from 'react';
import './Header.scss';

import { getTimeOfDay } from '../../../Helpers/timeAndDate';

/**
 * Props:
 * userName: The name of the user
 */

const Header = (props) => (
  <header className="Header">
    Good {getTimeOfDay()} {props.userName}!
  </header>
);

export default Header;
