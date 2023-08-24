import React, { Component } from "react";
import User from "./User";

export default class Login extends Component {
  state = { display: false };
  delete = () => {
    this.setState({ display: !this.state.display });
  };

  render() {
    let comp;
    if (this.state.display) {
      comp = <User />;
    }
    return (
      <div>
        {comp}
        <h1>{this.state.display ? "" : "Please Log In"}</h1>
        <button onClick={this.delete}>
          {this.state.display ? "LogOut" : "Log in"}
        </button>
      </div>
    );
  }
}
