import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navbar/navbar.js'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
