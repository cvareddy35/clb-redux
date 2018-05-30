import React, { Component } from 'react'

class Counter extends Component {
  // state = {
  //   count: 0
  // };

  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount, 

    }
  }
  

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    console.log('Props values : ', this.props.initialCount);

    return (
      <div>
        Counter : {this.state.count}
        <button onClick={this.increment}>
          Increment
        </button>
        <button onClick={this.decrement}>
          Decrement
        </button>
      </div>
    )
  }
}


export default Counter;