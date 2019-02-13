import React from "react";
import "./css/main.css";
import Display from "./components/DisplayComponents/Display";
import ButtonsGroup from "./components/ButtonComponents/ButtonsGroup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0 };
    this.numberHandler = this.handler.bind(this);
  }

  numberHandler() {
    // Just trying to get this working...
    let newResult = this.result + 1;
    this.setState({
      result: newResult
    });
  }

  render() {
    return (
      <div className="chassis">
        <Display result={this.state.result} />
        <ButtonsGroup />
      </div>
    );
  }
}

export default App;
