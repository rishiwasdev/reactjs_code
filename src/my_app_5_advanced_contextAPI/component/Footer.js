import React from "react";
import { CommonContext } from "./Vid_072_CommonContext";

class Footer extends React.Component {
  render() {
    return (
      <CommonContext.Consumer>
        {({ color }) => (
          <h2
            className="footer"
            style={{ backgroundColor: color, padding: 10 }}
          >
            Footer Component
          </h2>
        )}
      </CommonContext.Consumer>
    );
  }
}

export default Footer;
