import React from 'react';
import './WelcomeBar.scss';

import { getTimeOfDay } from '../../../services/timeAndDate';

/**
 * Props:
 * userName: The name of the user
 */

const WelcomeBar = (props) => (
  <header className="Header">
    Good {getTimeOfDay()} {props.userName}!
  </header>
);

export default WelcomeBar;
