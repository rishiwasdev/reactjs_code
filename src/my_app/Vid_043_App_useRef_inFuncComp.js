import React, { useRef } from "react";

/**
 * useRef is in functional components, same as Ref in class components.
 */
function MyApp() {
  let inputRef = useRef(null);

  function handleInput() {
    console.log("function handleInput()");
    inputRef.current.value = 1000;
    // inputRef.current.focus(); //focus is at <input> coz inputRef is used there
    // inputRef.current.style.color = "red";
    inputRef.current.style.display = "none";  //hides <input> coz inputRef is used there
  }

  return (
    <div className="App">
      <h2>useRef in React</h2>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Check Ref</button>
    </div>
  );
}

export default MyApp;
