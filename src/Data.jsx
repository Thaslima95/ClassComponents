import React, { Component } from "react";

export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "Pink" };
  }
  shouldComponentUpdate() {
    return true;
  }
  handlechange = () => {
    this.setState({ favoritecolor: "Red" });
  };
  render() {
    return (
      <div>
        Favourite Color:{this.state.favoritecolor}
        <button onClick={this.handlechange}>Change</button>
      </div>
    );
  }
}
