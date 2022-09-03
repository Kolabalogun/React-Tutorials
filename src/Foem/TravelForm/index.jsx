// import React from 'react';
import React, { Component } from "react";

class Index extends Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      gender: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form action="">
          <input
            onChange={this.handleClick}
            type="text"
            value={this.state.firstname}
            placeholder="firstname"
            name="firstname"
          />
          <br />
          <input
            type="text"
            onChange={this.handleClick}
            value={this.state.lastname}
            placeholder="lastname"
            name="lastname"
          />
          <br />
          <input
            type="text"
            onChange={this.handleClick}
            value={this.state.age}
            placeholder="age"
            name="age"
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleClick}
            />
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleClick}
            />
            Female
          </label>
          <br />
          <button onClick={this.handleClick}>Submit</button>

          <hr />
        </form>

        <h2>APPLICATION</h2>
        <br />

        <h4>Firstname: {this.state.firstname}</h4>
        <h4>Lastname: {this.state.lastname}</h4>
        <h4>Age: {this.state.age}</h4>
        <h4>Gender: {this.state.gender}</h4>
      </div>
    );
  }
}

export default Index;
