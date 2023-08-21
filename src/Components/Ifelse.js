import React, { Component } from "react";

class Operator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: false,
    };
  }

  render() {
    if (this.state.message) {
      return <div>Welcome to ReactJs</div>;
    } else {
      return <div>Error Occured</div>;
    }
  }
}

export default Operator;
