import React, { Component } from "react";

export default class Snapmethod extends Component {
  constructor(props) {
    super(props);
    this.state = { language: this.props.language || "HTML", change: false };
  }
  getSnapshotBeforeUpdate(prevprops, prevstate) {
    document.getElementById("div1").innerHTML =
      "Value before" + this.state.change && prevstate.language;
  }
  handleChange = () => {
    this.setState({ language: "ReactJS", change: true });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ language: "Node JS" });
    }, 5000);
  }
  componentDidUpdate = () => {
    document.getElementById("div2").innerHTML =
      "Updated value" + this.state.language;
  };
  render() {
    return (
      <div>
        <h1>Favorite Language:{this.state.language}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
        <button onClick={this.handleChange}>Snap</button>
      </div>
    );
  }
}
