import React from "react";
import Student from "./component/Vid_028_Student_ClassComp";

/** called when a component is hidden/shown or any case when it is out of DOM.
 * method is ovverridden in componentWillUnmount.js file.
 */
class MyApp extends React.Component {
  constructor() {
    super();
    console.info("method called: constructor");
    this.state = { show: true };
  }

  render() {
    console.info("method called: render");
    return (
      <div className="App">
        <h2>ReactJS Lifecycle method - 06: componentWillUnmount</h2>
        {this.state.show ? (
          <Student />
        ) : (
          <h4>Child component hidden/removed.</h4>
        )}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Child Component
        </button>
      </div>
    );
  }
}

export default MyApp;
