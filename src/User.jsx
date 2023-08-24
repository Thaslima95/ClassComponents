import React, { Component } from "react";

export default class User extends Component {
  componentWillUnmount() {
    alert("User is going to Log out");
  }

  render() {
    return <h1>Welcome User!</h1>;
  }
}
