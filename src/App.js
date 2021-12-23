import React, { Component } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserOutput from "./components/UserOutput/UserOutput";
import "./App.css";
class App extends Component {
  state = {
    username: "Shahruhkh Altaf",
  };

  eventHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div className="App">
        Input:
        <UserInput
          changed={this.eventHandler}
          currentName={this.state.username}
        />
        Output:
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
