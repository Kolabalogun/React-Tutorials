import React, { Component } from "react";

class Index extends Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
      isFriendly: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.firstname}
          name="firstname"
          placeholder="Firstname"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastname}
          name="lastname"
          placeholder="Lastname"
          onChange={this.handleChange}
        />
        <h2>
          {this.state.firstname} {this.state.lastname}
        </h2>

        <input type="checkbox" checked={this.isFriendly} />
      </div>
    );
  } 
}

export default Index;
