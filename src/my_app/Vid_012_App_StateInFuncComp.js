/** useState is a hook to maintain state of data.
 * state is public.
 * We must not use state outside the component it's defined in.
 */
import React, { useState } from "react";

function MyApp() {
  // use setVarname or updateVarname, both work
  // const [name, updateName] = useState("Rishi");
  const [name, setName] = useState("Navi"); // can use React.useState("...")
  const [count, setCount] = useState(0);

  function changeName() {
    setName(name === "Rishi" ? "Navi" : "Rishi"); // updateName("Navi");
  }

  function add1() {
    setCount(count + 1);
  }

  console.warn("___________________");

  return (
    <div>
      <h1>Using 'Function' Component</h1>
      <hr />
      <div>
        Name: <b>{name}</b>
        <br />
        <button onClick={changeName}>Change Name</button>
      </div>
      <br />
      <div>
        Clicked: <b>{count}</b> time(s)
        <br />
        <button onClick={add1}>Add 1</button>
      </div>
    </div>
  );
}

export default MyApp;
