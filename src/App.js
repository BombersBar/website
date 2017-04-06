import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavigationBar from './Components/NavigationBar';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            <Link to="/">
              Bomber's Bar
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
