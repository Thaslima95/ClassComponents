import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = { pincode: 0, place: "" };
  }
  componentDidUpdate() {
    if (this.state.pincode == "614001") {
      document.getElementById("mydiv").innerHTML = "Place" + ":" + "mannai";
    } else {
      document.getElementById("mydiv").innerHTML = "";
    }
  }
  componentDidMount = () => {};
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ pincode: e.target.value })}
        />
        <p id="mydiv"></p>
      </div>
    );
  }
}
