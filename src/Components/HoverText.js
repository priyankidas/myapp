import React, { Component } from "react";
class HoverText extends Component {
  constructor() {
    super();
    this.state = {
      hover: 0,
    };
  }
  Change() {
    this.setState({
      hover: this.state.hover + 1,
    });
  }
  render() {
    return (
      <div>
        <h1>Hover {this.state.hover}</h1>
        <button onMouseOver={() => this.Change()}>HOverMe</button>
      </div>
    );
  }
}

export default HoverText;
