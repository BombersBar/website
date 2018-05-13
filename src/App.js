import React, { Component } from 'react';
import NavigationBar from './Components/Navigation/NavigationBar';
import Intel from './Components/Intel/Intel';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavigationBar />
        </div>
        <Intel />
        {this.props.children}
      </div>
    );
  }
}

export default App;
