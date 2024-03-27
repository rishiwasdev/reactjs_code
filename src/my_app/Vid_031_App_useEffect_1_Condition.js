import React, { useEffect, useState } from "react";

/** useEffect
 * can have conditions which decide when it runs
 *
 * */
function MyApp() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  useEffect(() => {
    console.log("useEffect() - called on state change of: count");
  }, [count]); // called only when count changes

  useEffect(() => {
    console.log("useEffect() - called on state change of: data");
  }, [data]); // called only when data changes

  useEffect(() => {
    console.log("useEffect() - called for both: count & data");
  }, [count, data]); // called for both: count & data

  return (
    <div className="App">
      <h2>Hook-1 - useEffect</h2>
      <div style={{ display: "inline-block", marginRight: 25 }}>
        Count: {count}
      </div>
      <div style={{ display: "inline-block" }}>Data: {data}</div>
      <br />
      <button
        style={{ marginRight: 10 }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add Count
      </button>{" "}
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        Add Data
      </button>
      <h6>
        Clicking either data or count button runs corresponding useEffect.
      </h6>
    </div>
  );
}

export default MyApp;
