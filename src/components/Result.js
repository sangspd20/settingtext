import React, { Component } from "react";

class Result extends Component {
  setColor() {
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fontSize
    };
  }
  render() {
    return (
      <div>
        <div>
          <p className="text-left">
            Color: <span>red</span> FontSize:{" "}
            <span>{this.props.fontSize}px</span>
          </p>
          <div style={this.setColor()} className="text-left p-4 result-content">
            Nội dung setting
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
