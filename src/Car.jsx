import React, { Component } from "react";
import Cardetails from "./Cardetails";
import Chocolates from "./Chocolates";
import Biscuits from "./Biscuits";
import Snapmethod from "./Snapmethod";

export default class Car extends Component {
  constructor() {
    super();
    this.changeState.bind(this);
    this.state = {
      color: ["red", "blue", "green"],
      brand: "Rolex",
      Price: 2334545,
    };
  }
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ language: this.state.values[0] });
  //     this.setState({ index: this.state.index + 1 });
  //   }, 2000);
  // }
  changeState = (value) => {
    this.setState({ brand: value });
  };
  render() {
    return (
      <div>
        <Cardetails details={this.state} changeState={this.changeState} />
        <Chocolates chocolate="Ferrero" />
        <Biscuits biscuit="Britannia" />

        <Snapmethod language="CSS" />
      </div>
    );
  }
}
