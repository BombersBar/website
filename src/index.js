import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import IndexView from './Views/Index';
import Obombercare from './Views/Obombercare';
import MustWatchView from './Views/MustWatch';
import FaqView from './Views/Faq';
import FittingsView from './Views/Fittings';
import Terminology from './Views/Terminology';


import './index.css';

ReactDOM.render((
    <Router>
      <App>
        <Route path="/" exact={true} render={IndexView} />
        <Route path="/must-watch" component={MustWatchView} />
        <Route path="/faq" component={FaqView} />
        <Route path="/fittings" component={FittingsView} />
        <Route path="/obombercare" component={Obombercare} />
        <Route path="/terminology" component={Terminology} />
      </App>
    </Router>
  ),
  document.getElementById('root')
);
