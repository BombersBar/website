import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavigationBar from './Components/Navigation/NavigationBar';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            <Link className="logoName" to="/">
            <img className="bblogo" src={require('../public/bombersbarlogo.jpg')}/>
              <span className="bbName">Bombers Bar</span>
            </Link>
          </h2>
          <NavigationBar />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
