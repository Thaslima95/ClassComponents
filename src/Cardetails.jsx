import React, { Component } from "react";

export default class Cardetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        Cardetails
        <p>Brand:{this.props.details.brand}</p>
        <p>
          Available Colors:
          {this.props.details.color.map((e) => (
            <h4>{e}</h4>
          ))}
        </p>
        <p>{console.log(typeof this.props.details.color)}</p>
        <button onClick={() => this.props.changeState("Ambassador")}>
          Change
        </button>
      </div>
    );
  }
}
