import React from "react";
import User from "./component/Vid_040_User_PureComp_props";

/**
 * Pure Component test for props.
 * The behavior is the same as for the state.
 */
class MyApp extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    console.log("App -> method render()");

    return (
      <div>
        <h2 style={{ marginBottom: 40 }}>
          Pure Component 'props change' example
        </h2>
        {/* Testing for props */}
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click to Increase Count
        </button>
        <User count={this.state.count} />{" "}
        <button
          style={{ backgroundColor: "yellowgreen" }}
          onClick={() => {
            this.setState({ count: this.state.count });
            alert("Clicked, Count not changed.\nUser component NOT rendered.");
          }}
        >
          Click to keep same Count
        </button>{" "}
        <p style={{ fontSize: 12, color: "navy", marginTop: 40 }}>
          Check Console Logs:
          <br />
          Button <b>increasing count</b> (changing props)
          <b> re-renders User Component</b>.
          <br />
          Button <b>keeping same count DOES NOT re-render</b> User Component.
          <br />
          BCOZ <b>class User extends PureComponent</b>.
          <br />
          App component re-renders every time coz this is not a PureComponent.{" "}
        </p>
      </div>
    );
  }
}

export default MyApp;
