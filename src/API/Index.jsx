import React, { Component } from "react";

class Index extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      character: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch("https://swapi.dev/api/people/1/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          character: data,
        });
      });
  }

  render() {
    let txt = this.state.loading ? "Loading" : this.state.character.name;

    return <div>{txt}</div>;
  }
}

export default Index;
