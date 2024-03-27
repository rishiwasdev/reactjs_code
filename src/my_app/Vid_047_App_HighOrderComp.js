import React, { useState } from "react";

/**
 * HOC(High Order Component):
 * - At least 2 components,
 * - is a component that takes a component as props, and also returns a component
 * -
 */
function MyApp() {
  return (
    <div className="App">
      <h2>HOC(High Order Component Example)</h2>
      <HOCOrange cmp={Counter} />
      <HOCBeige cmp={Counter} />
      <HOCGreen cmp={Counter} />
    </div>
  );
}

// ANOTHER COMPONENT
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Counter Component</h4>
      <h5>Count: {count}</h5>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

function HOCOrange(props) {
  return (
    <div style={{ backgroundColor: "orange" }}>
      <h2>HOC Orange</h2>
      {/* <props.cmp/> */}
      <h4>
        <b>ORANGE COUNTER</b>
        <props.cmp />
      </h4>
    </div>
  );
}
function HOCBeige(props) {
  return (
    <div style={{ backgroundColor: "beige" }}>
      <h2>HOC Beige</h2>
      <h4>
        <b>BEIGE COUNTER</b>
        <props.cmp />
      </h4>
    </div>
  );
}
function HOCGreen(props) {
  return (
    <div style={{ backgroundColor: "green" }}>
      <h2>HOC Green</h2>
      <h4>
        <b>GREEN COUNTER</b>
        <props.cmp />
      </h4>
    </div>
  );
}

export default MyApp;
