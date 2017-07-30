import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons'
import Display from './components/Display'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <Buttons />
      </div>
    );
  }
}

export default App;
