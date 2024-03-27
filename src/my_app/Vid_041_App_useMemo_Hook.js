import { useState, useMemo } from "react";

/**
 * useMemo Hook in functional components:
 * - just like PureComponent in class components
 * - used so that a component doesn't render unnecessarily.
 */
function MyApp() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(5);

  // function multiplyCountBy3() {
  //   console.warn("App -> method: multiplyCountBy3()");
  //   return count * 3;
  // }

  const mulCountBy3Memo = useMemo(
    function multiplyCountBy3() {
      console.warn("App -> method: multiplyCountBy3()");
      return count * 3;
    },
    [count]
  );

  console.log("App -> method: render()");
  return (
    <div>
      <h2 style={{ marginBottom: 30 }}>useMemo Hook Usage</h2>
      {/* ------ Calling method multiplyCountBy3() freely, needs () ------ */}
      {/* <h3>multiplyCountBy3:&emsp;{multiplyCountBy3()}</h3> */}
      {/* ------ Now gets called on every state change, which is unwanted. ------ */}

      {/* ------ Calling method via memo variable() mulCountBy3Memo, using () IS INVALID ------ */}
      <h3>multiplyCountBy3:&emsp;{mulCountBy3Memo}</h3>
      {/* ------ Now gets called on change of count, as defined. ------ */}
      {/* ------------ */}
      <button
        style={{ backgroundColor: "yellow", marginTop: 50 }}
        onClick={() => {
          console.log("Count increased.");
          setCount(count + 1);
        }}
      >
        Click to Increase Count
      </button>
      <h3>Count: {count}</h3>
      {/* ------------ */}
      <button
        style={{ backgroundColor: "yellowgreen" }}
        onClick={() => {
          console.log("Val doubled.");
          setVal(val * 2);
        }}
      >
        Double Value
      </button>
      <h3>Value: {val}</h3>
      <p style={{ fontSize: 12, color: "navy", marginTop: 40 }}>
        Check Console Logs on changing state:
        <br />
        Buttons increase count or double val, both re-render, & call
        multiplyCountBy3().
        <br />
        These are unnecessary calls & must not happen, can cause side-effects.
        <br />
        Use useMemo hook to solve this.
        <br />
        Check const mulCountBy3Memo defining func multiplyCountBy3().
      </p>
    </div>
  );
}

export default MyApp;
