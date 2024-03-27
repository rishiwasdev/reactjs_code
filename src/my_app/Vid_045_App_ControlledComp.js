import React, { useState } from "react";

/**
 * Controlled Component in React:
 *  - implies that there is at least one input fields in the component.
 *  - when we handled/controlled input fields through state.
 *
 * Uncontrolled components are directly handled through DOM.
 */
function MyApp() {
  let [val, setVal] = useState("Editable by state, coz value attribute is SET");
  let [name, setName] = useState("Guest (using defaultValue, editable)");

  return (
    <div className="App">
      <h2>Controlled Component</h2>
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
        style={{ width: 400, textAlign: "center" }}
      />
      {/* Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field.
          If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
       */}
      {/* -------------------- */}
      <br />
      <br />
      <b>Name: </b>
      <input
        type="text"
        defaultValue={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        style={{ width: 360, textAlign: "center" }}
      />
      {/* -------------------- */}
      <br />
      <br />
      <b>Email: </b>
      <input
        type="text"
        placeholder="Editable, as value attribute is NOT SET"
        style={{ width: 360, textAlign: "center" }}
      />
    </div>
  );
}

export default MyApp;
