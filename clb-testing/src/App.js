import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/common/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Super cool </h1>
        <h3>One more text</h3>
        <Header />
      </div>
    );
  }
}

export default App;
