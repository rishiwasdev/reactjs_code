import React from "react";
import { CommonContext } from "./Vid_072_CommonContext";

class Main extends React.Component {
  render() {
    return (
      <CommonContext.Consumer>
        {({ color }) => (
          <h2 style={{ backgroundColor: color, padding: 10 }}>
            Main Context Component
          </h2>
        )}
      </CommonContext.Consumer>
    );
  }
}

export default Main;
