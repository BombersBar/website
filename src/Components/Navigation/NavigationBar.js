import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.css';

function NavigationBar() {
  return (
    <ul className="navigationBar">
      <li>
        <Link to="/faq">
          Faq
        </Link>
      </li>
      <li>
        <Link to="/must-watch">
          Must Watch
        </Link>
      </li>
      <li>
        <Link to="/fittings">
          Fittings
        </Link>
      </li>
    </ul>
  );
}

export default NavigationBar;
