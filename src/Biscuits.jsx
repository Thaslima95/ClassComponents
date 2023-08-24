import React, { Component } from "react";

export default class Biscuits extends Component {
  constructor(props) {
    super(props);
    this.state = { biscuit: "oreo" };
  }
  static getDerivedStateFromProps(props, state) {
    return { biscuit: props.biscuit || state.biscuit };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ biscuit: "Dark Fantacy" });
    }, 2000);
  };
  render() {
    return <div>Biscuits:{this.state.biscuit}</div>;
  }
}
