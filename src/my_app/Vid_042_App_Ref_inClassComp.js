import React, { createRef } from "react";

/**
 * Ref is a feature of React, used ONLY IN class components.
 * To use in functional components: In later videos.
 * Use as less as possible, manipulates DOM hence causes slowness.
 * Use only when there is no option to do something.
 */
class MyApp extends React.PureComponent {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  getVal() {
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.color = "red";
    this.inputRef.current.style.backgroundColor = "yellow";
  }

  componentDidMount() {
    console.log((this.inputRef.current.value = "1000"));
    // console.log(this.inputRef);
  }

  render() {
    console.log("App -> method render()");

    return (
      <div className="App">
        <h2 style={{ marginBottom: 40 }}>Ref example</h2>
        <input type="text" ref={this.inputRef} />
        <button
          onClick={() => {
            this.getVal();
          }}
        >
          Check Ref
        </button>
      </div>
    );
  }
}

export default MyApp;
