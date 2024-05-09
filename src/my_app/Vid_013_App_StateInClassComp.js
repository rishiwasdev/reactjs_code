import React, { Component } from "react";

/*** this code CAN BE DIRECTLY USED AS App.js.
 * e.g. class App extends Component { render() { return ( <div> ... </div> ); } }
 */
class MyApp extends Component {
  // constructor mandatory
  constructor() {
    super(); // super mandatory

    // BELOW, state is defined like a JS object
    this.state = {
      myName: "Navi",
      count: 0,
    };
  }

  // NO NEED to write 'function' in class component
  changeName() {
    this.setState({
      myName: this.state.myName === "Rishi" ? "Navi" : "Rishi",
    });
  }
  // ---------------- counter
  add1() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Using 'Class' Component</h1>
        <hr />
        <div>
          Name: <b>{this.state.myName}</b>
          <br />
          <button onClick={() => this.changeName()}>Change Name</button>
          {/* THIS is HOW to always CALL a FUNCTION in a class component*/}
        </div>
        <br />
        <div>
          Clicked: <b>{this.state.count}</b> time(s)
          <br />
          <button onClick={() => this.add1()}>Add 1</button>
        </div>
      </div>
    );
  }
}

export default MyApp;
