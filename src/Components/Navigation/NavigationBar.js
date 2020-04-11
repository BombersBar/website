import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className="navigationBar">
      <h2>
        <Link className="logoName" to="/">
          <img className="bblogo" src={require('../../images/bombersbarlogo.jpg')} alt=''/>
          <span className="bbName">Bombers Bar</span>
        </Link>
      </h2>
    <ul>
      <li>
        <Link to="/faq">
          FAQ
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
      <li>
        <Link to="/terminology">
          Terminology
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default NavigationBar;
