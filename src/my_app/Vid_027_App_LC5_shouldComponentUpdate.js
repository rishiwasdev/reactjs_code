import React from "react";

/**componentDidUpdate:		componentDidUpdate(),		componentDidUpdate(prevProps, prevState, snapshot)
	> Use with state & props
	> Changing state WILL call componentDidUpdate()
	=> DO NOT CHANGE state here directly, will get called again & again causing infinite loop
	> If MUST CHANGE state, provide some condition to restrict it for running unnecessarily
	> Similarly, should not call an API; if must, only based on a condition.
	> Previous state & previous props
	> snapshot is undefined unless the method getSnapshotBeforeUpdate() is implementd.
*/
class MyApp extends React.Component {
  constructor() {
    super();
    console.info("method: constructor");
    this.state = { count: 0 };
  }

  render() {
    console.info("method: render");
    return (
      <div className="App">
        <h2>ReactJS Lifecycle method - 05: shouldComponentUpdate </h2>
        <h3>Count = {this.state.count}</h3>
        {/* changing state WILL call componentDidUpdate(), WILL NOT call componentDidMount() */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
      </div>
    );
  }

  componentDidMount() {
    console.info("method: componentDidMount");
  }

  shouldComponentUpdate() {
    console.info("method: shouldComponentUpdate. Count:", this.state.count);
    // At this point count is logged, but not updated on page.
    return this.state.count >= 1 && this.state.count <= 5 ? true : false;
    // now count gets updated/increased on page only
    // if count here reaches between 3 & 7, afterwards increaesed & shows 4 to 8 on page.
    // i.e. log value 3, => page value 4, 4 then 5, and so on...
  }

  componentDidUpdate() {
    console.info("method: componentDidUpdate");
  }
}

export default MyApp;
