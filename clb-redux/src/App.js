import React, { Component } from 'react';
import Counter from './components/counter';

import store from './store';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h3>Redux Fundamentals</h3>
        <Counter store={store} />
      </div>
    );
  }
}

export default App;
