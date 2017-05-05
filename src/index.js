import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Homepage from './Views/Homepage';
import Obombercare from './Views/Obombercare';
import MustWatchView from './Views/MustWatch';
import FaqView from './Views/Faq';
import FittingsView from './Views/Fittings';
import Terminology from './Views/Terminology';
import Donations from './Views/Donations';



import './index.css';

ReactDOM.render((
    <Router>
      <App>
        <Route path="/" exact={true} component={Homepage} />
        <Route path="/must-watch" component={MustWatchView} />
        <Route path="/faq" component={FaqView} />
        <Route path="/fittings" component={FittingsView} />
        <Route path="/obombercare" component={Obombercare} />
        <Route path="/terminology" component={Terminology} />
        <Route path="/donations" component={Donations} />
      </App>
    </Router>
  ),
  document.getElementById('root')
);
