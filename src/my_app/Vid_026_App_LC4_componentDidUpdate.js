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
    this.state = { name: "R", count: 0 };
  }

  // Lifecycle method render()
  render() {
    console.info("method called: render");
    return (
      <div className="App">
        <h2>ReactJS Lifecycle method - 04: componentDidUpdate </h2>
        <h3>Hello {this.state.name}!</h3>
        {/* changing state WILL call componentDidUpdate(), WILL NOT call componentDidMount() */}
        <button
          onClick={() =>
            this.setState({ name: this.state.name === "N" ? "R" : "N" })
          }
        >
          Change state.name
        </button>
        <br />
        <br />
        {/* changing state WILL call componentDidUpdate(), WILL NOT call componentDidMount() */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
        <h3>Count = {this.state.count}</h3>
      </div>
    );
  }

  // Lifecycle method componentDidMount()
  componentDidMount() {
    console.info("method called: componentDidMount");
  }

  // Lifecycle method componentDidUpdate()
  // componentDidUpdate() {
  //   console.info("method called: componentDidUpdate");
  // }
  // with previous state & props
  // snapshot is undefined unless the method getSnapshotBeforeUpdate() is implementd.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.info("method called: componentDidUpdate.\nPrev state:", prevState);
    // this.setState({ count: this.state.count + 1 });
    // WILL get called Over & Again, & CAUSE INFINIT LOOP (Error: Maximum update depth exceeded)
    if (this.state.count === 10) this.setState({ count: 0 }); //reset
    console.info("snapshot:", snapshot);
  }
}

export default MyApp;
