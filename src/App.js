import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavigationBar from './Components/Navigation/NavigationBar';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavigationBar />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
