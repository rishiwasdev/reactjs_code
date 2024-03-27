import React from "react";

/** No effect of state & props
 * Called when HTML is ready, things are complete for further development
 * APIs can be called, list data etc can be shown
 * HTML dependent data, e.g hide/show field/component
 */
class MyApp extends React.Component {
  // Lifecycle method constructor()
  constructor() {
    super();
    console.info("method called: constructor");
    this.state = { name: "R" };
  }

  // Lifecycle method render()
  render() {
    console.info("method called: render");
    return (
      <div className="App">
        <h2>ReactJS Lifecycle method - 03: componentDidMount </h2>
        <h3>Hello {this.state.name}!</h3>
        <button
          onClick={
            () => this.setState({ name: this.state.name === "N" ? "R" : "N" })
            // changing state will not call componentDidMount()
          }
        >
          Change state.name
        </button>
      </div>
    );
  }

  // Lifecycle method componentDidMount()
  componentDidMount() {
    console.info("method called: componentDidMount");
  }
}

export default MyApp;
