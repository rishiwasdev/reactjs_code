import React from "react";
// used LC as short for Lifecycle
/** Usage of the FIRST LIFECYCLE METHOD of ReactJS, 'constructor':
 * Now using class component for learning clarity.  Later, using function component. */
/** first lifecycle method, so states defined are available to use later */
/** DO NOT CALL APIs, data might be incomplete while trying to use. */
/** APIs can be called in componentDidMount() method. */
class MyApp extends React.Component {
  // Lifecycle method constructor()
  constructor() {
    super();
    console.info("method called: constructor");
    this.state = { name: "Rishi" };
  }

  // render below is also a lifecycle method, called next after constructor
  // Lifecycle method constructor()
  render() {
    console.info("method called: render");
    return (
      <div className="App">
        <h2>ReactJS Lifecycle method - 01: constructor</h2>
        <h3>Hello {this.state.name}!</h3>
      </div>
    );
  }
}

export default MyApp;
