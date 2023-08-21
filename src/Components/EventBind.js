import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.ClickHandler = this.ClickHandler.bind(this);
  }
  ClickHandler() {
    this.setState({
      message: "Good bye!",
    });
    console.log(this);
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.ClickHandler}>ClickOnMe</button>
      </div>
    );
  }
}

export default EventBind;
