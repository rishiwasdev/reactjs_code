import React, { useEffect, useState } from "react";

/** useEffect
 * runs at start, at state change
 * CAN have a function inside it // BUT a function CANNOT have useEffect inside it
 * */
function MyApp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("inside useEffect()-1");
  });

  //useEffect can be used more than once
  useEffect(() => {
    console.log("inside useEffect()-2");
  });

  return (
    <div className="App">
      <h2>Hook-1 - useEffect</h2>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <h6>
        useEffect runs at start, at state change. Check logs, click button to
        see.
      </h6>
    </div>
  );
}

export default MyApp;
