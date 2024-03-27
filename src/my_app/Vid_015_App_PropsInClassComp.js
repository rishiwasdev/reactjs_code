import React from "react";
// import Student from "./component/Vid_014_Student_FuncComp";
import Student from "./component/Vid_015_Student_ClassComp";

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      mobNum: 6666666666,
      adrs: "Delhi",
      mail: "tik@gmail",
    };
  }

  render() {
    return (
      <div>
        <h1>Props in React</h1>
        <Student
          name={"Navi"}
          email={"nav@gmail"}
          contact={{
            mob: 9999999999,
            addr: "Ludhiana",
          }}
        />
        <Student
          name={"Rishi"}
          email={"rrr@gmail"}
          contact={{
            mob: 8888888888,
            addr: "Nangal",
          }}
        />
        {/* ------- Accessing class' state */}
        <Student
          name="Tikku"
          email={this.state.mail}
          contact={{
            mob: this.state.mobNum,
            addr: this.state.adrs,
          }}
          // NOTE: state/var INSIDE this OBJECT is USED WITHOUT {...}
        />
        <br />
        <button
          onClick={() => {
            /* ------- Accessing class' state */
            this.setState({
              mobNum:
                this.state.mobNum === 6666666666 ? 7777777777 : 6666666666,
            });
            this.setState({
              adrs: this.state.adrs === "Delhi" ? "Ludhiana" : "Delhi",
            });
            this.setState({
              mail:
                this.state.mail === "tiktik@gmail"
                  ? "tik@gmail"
                  : "tiktik@gmail",
            });
          }}
          style={{ backgroundColor: "yellow" }}
        >
          Change
        </button>
      </div>
    );
  }
}
export default MyApp;
