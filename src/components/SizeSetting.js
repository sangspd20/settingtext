import React, { Component } from "react";

class SizeSetting extends Component {
  changeSize(value) {
    this.props.onChangeSize(value);
  }

  render() {
    return (
      <div className="card flex-grow-1 m-3">
        <div className="card-body">
          <h4 className="card-title">Size: {this.props.fontSize}px</h4>
          <div className="card-text">
            <button
              type="button"
              className="btn btn-primary m-3"
              onClick={() => this.changeSize(2)}
            >
              Tăng
            </button>
            <button
              type="button"
              className="btn btn-primary m-3"
              onClick={() => this.changeSize(-2)}
            >
              Giảm
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
