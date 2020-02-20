import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "#ccc"]
    };
  }

  showColor(color) {
    return {
      backgroundColor: color
    };
  }

  setColor(color) {
    this.props.receivedColor(color);
  }

  render() {
    var colors = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "active" : ""}
          onClick={() => this.setColor(color)}
        ></span>
      );
    });

    return (
      <div className="card flex-grow-1 m-3">
        <div className="card-body">
          <h4 className="card-title">Color Picker</h4>
          <p className="card-text">{colors}</p>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
