import React, { useRef } from "react";
import User from "./component/Vid_044_User_forwardRefExample";

/**
 * forwardRef (Same way in Class Components):
 * - To affect an element in another component.
 * - Example below:
 */
function MyApp() {
  let inputRef = useRef(null);

  function updateInput() {
    console.log("function updateInput()");
    inputRef.current.value = 1000;
    inputRef.current.style.color = "red";
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <h2>forwardRef in React</h2>
      <User ref={inputRef} />
      <br />
      <button onClick={updateInput}>Update InputBox</button>
    </div>
  );
}

export default MyApp;
