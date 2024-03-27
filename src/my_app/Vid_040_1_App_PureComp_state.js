import React from "react";

/**
 * Pure Component is a feature of React, ONLY IN class components.
 * In functional components: the feature called useMemo (a hook)
 * Pure Component stops re-rendering of a component
 * when the state is the same even upon salling setState function.
 * e.g. num = 10; setNum(10); will re-render the component. Pure Function can stop this re-rendering.
 */
class MyApp extends React.PureComponent {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    console.log("App -> method render()");

    return (
      <div>
        <h2 style={{ marginBottom: 40 }}>Pure Component 'state change' example</h2>

        {/* Testing for state */}
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click to Increase Count
        </button>
        <span style={{ fontSize: 24, fontWeight: "bold", margin: 50 }}>
          Count: {this.state.count}
        </span>
        <button
          style={{ backgroundColor: "yellowgreen" }}
          onClick={() => {
            this.setState({ count: this.state.count });
            alert("Clicked, Count not changed.");
          }}
        >
          Click to keep Same Count
        </button>
        <p style={{ fontSize: 12, color: "navy", marginTop: 40 }}>
          Check Console Logs:
          <br />
          Button increasing count (changing state) re-renders.
          <br />
          Button keeping same count DOES NOT re-render
          <br />
          BCOZ class extends PureComponent.
        </p>
      </div>
    );
  }
}

export default MyApp;
