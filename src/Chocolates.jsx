import React, { Component } from "react";

export default class Chocolates extends Component {
  constructor(props) {
    super(props);
    this.state = { chocolate: "Dairy Milk" };
  }
  static getDerivedStateFromProps(props, state) {
    return { chocolate: props.chocolate || state.chocolate };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ chocolate: "Snickers" });
    }, 5000);
  }
  render() {
    return <div>Favorite:{this.state.chocolate}</div>;
  }
}
