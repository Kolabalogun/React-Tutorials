import React, { Component } from "react";
import Header from "./Header";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        // console.log(memes[0])
        this.setState({
          allMemeImgs: memes,
        });
      });
  }

  handleChange(e) {
    // console.log('Working')

    const {name, value} = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
      e.preventDefault()
      const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
      const randImg = this.state.allMemeImgs[randNum].url
      this.setState({
        randomImg: randImg
      })


  }

  render() {
    return (
      <div>
        <h1>Meme Generator Section</h1>

        <form action="" onSubmit={this.handleSubmit}>
          <p>Top Text</p>
          <input
            type="text"
            name="topText"
            onChange={this.handleChange}
            value={this.state.topText}
            placeholder="Top Text"
          />

          <br />

          <p>Bottom Text</p>
          <input
            type="text"
            name="bottomText"
            onChange={this.handleChange}
            value={this.state.bottomText}
            placeholder="Bottom Text"
          />

          <button>Gen</button>
        </form>

        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
