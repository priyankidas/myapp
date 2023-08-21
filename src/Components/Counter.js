import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  Incrementmessage() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    
    return (
      <div>
        <h1>
          <p>Increment</p>
          {this.state.count}
        </h1>
        <button onClick={() => this.Incrementmessage()}>ClickMe</button>
      </div>
    );
  }
}

export default Counter;
