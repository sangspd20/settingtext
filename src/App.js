import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import Result from "./components/Result";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 12
    };
  }

  setColor = color => {
    this.setState({
      color: color
    });
  };

  changeSize = value => {
    this.setState({
      fontSize:
        this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36
          ? this.state.fontSize + value
          : this.state.fontSize
    });
  };

  resetDefault = value => {
    if (value) {
      this.setState({
        color: "red",
        fontSize: 12
      });
    }
  };

  render() {
    return (
      <div className="App container p-4">
        <div className="d-flex">
          <ColorPicker color={this.state.color} receivedColor={this.setColor} />
          <div className="card flex-grow-1 m-3">
            <div className="card-body">
              <SizeSetting
                fontSize={this.state.fontSize}
                onChangeSize={this.changeSize}
              />
              <Reset onResetDefault={this.resetDefault} />
            </div>
          </div>
        </div>
        <Result color={this.state.color} fontSize={this.state.fontSize} />
      </div>
    );
  }
}

export default App;
