import React, { Component } from "react";

class VariableOperator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IsloggedIn: true,
    };
  }

  render() {
    return this.state.IsloggedIn ? <div>Welcome</div> : <div>ERRor</div>;
  }
}

export default VariableOperator;
