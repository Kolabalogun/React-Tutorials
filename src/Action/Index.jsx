import React, { Component } from "react";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    let butonTExt = this.state.isLoggedIn ? "LOG IN" : "LOG OUT";

    return (
      <div>
        <button onClick={this.handleClick}>{butonTExt}</button>
      </div>
    );
  }
}

export default Index;
