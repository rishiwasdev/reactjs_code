import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Button from "./component/Vid_072_Button";
import { CommonContext } from "./component/Vid_072_CommonContext";
import Main from "./component/Vid_072_Main";

class MyApp extends React.Component {
  constructor() {
    super();

    // defining function before so that state may use it
    this.updateColor = (newColor) => {
      this.setState({ color: newColor });
    };

    this.state = {
      color: "lightcyan",
      updateColor: this.updateColor,
    };
  }

  render() {
    return (
      <div>
        <CommonContext.Provider value={this.state}>
          <Header />
          <CommonContext.Consumer>
            {({ color }) => (
              <h2 style={{ backgroundColor: color, padding: 10 }}>
                <h1>Easy Example for Context API</h1>
              </h2>
            )}
          </CommonContext.Consumer>
          <Main />
          <Button />
          <Footer />
        </CommonContext.Provider>
      </div>
    );
  }
}

export default MyApp;
