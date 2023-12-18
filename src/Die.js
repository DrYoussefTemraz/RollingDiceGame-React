import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <i
        className={`Die fi fi-sr-dice-${this.props.face} ${
          this.props.rolling && "shaking"
        }`}
      />
    );
  }
}
export default Die;
