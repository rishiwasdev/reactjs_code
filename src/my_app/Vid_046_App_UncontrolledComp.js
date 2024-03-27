import React, { useRef } from "react";
import $ from "jquery"; // Import jQuery

/**
 * Unontrolled Component (NOT via React except Ref as below, OR via JS, jQuery etc...):
 */
function MyApp() {
  let inputRef1 = useRef(null);
  let inputRef2 = useRef(null);

  function submitForm(e) {
    e.preventDefault();
    getAndPrintVal(inputRef1, "txt1", "val1");
    console.log("------------------");
    getAndPrintVal(inputRef2, "txt2", "val2");
  }

  // print helper
  function getAndPrintVal(ref, ID, valName) {
    console.log(valName, "Using Ref: \t", ref.current.value);
    console.log(valName, "Using JS: \t\t", document.getElementById(ID).value);
    console.log(valName, "Using jQuery: \t", $("#" + ID).val());
  }

  return (
    <div className="App">
      <h2>Uncontrolled Component</h2>
      <form onSubmit={submitForm}>
        <b>First Name: </b>
        <input type="text" ref={inputRef1} id="txt1" />
        <br />
        <br />
        {/* -------------------- */}
        <b>Last Name: </b>
        <input type="text" ref={inputRef2} id="txt2" />
        <br />
        <br />
        {/* -------------------- */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default MyApp;
