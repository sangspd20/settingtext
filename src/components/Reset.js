import React, { Component } from "react";

class Reset extends Component {
  resetDefault() {
    this.props.onResetDefault(true);
  }

  render() {
    return (
      <button
        type="button"
        className="btn btn-success m-3"
        onClick={() => this.resetDefault()}
      >
        Reset
      </button>
    );
  }
}

export default Reset;
