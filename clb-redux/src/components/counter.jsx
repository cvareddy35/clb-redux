import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {

  render() {
    return (
      <div>
        <h3>Counter: { this.props.count } </h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter
  }
}

export default connect(mapStateToProps)(Counter);