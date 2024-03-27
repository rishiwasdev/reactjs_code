import React from "react";

function MyApp() {
  const [data, setData] = React.useState({ name: "Abc Def", age: 30 });

  // ---------------- EASY WAY -1: separate functions for each change
  function changeName(event) {
    setData({ ...data, name: event.target.value }); // just change required field
    // WORSE WAY: setData({ name: data.name, age: event.target.value });
  }
  function changeAge(event) {
    setData({ ...data, age: event.target.value }); // just change required field
    // WORSE WAY: setData({ name: data.name, age: event.target.value });
  }

  // COMPLEX WAY
  function changeVal(event, fieldName) {
    // ----------- Condition outside data field
    fieldName === "name" ? changeName(event) : changeAge(event);
    // ----------- Condition inside data field (CONFUSING)
    // setData( (fieldName === "name") ? { name: event.target.value } : { age: event.target.value } );
  }

  return (
    <div className="App" style={{ backgroundColor: "lightcyan" }}>
      <h1>State Object with Hooks</h1>
      {/** PROPBLEM:
       * Changing any 1 state property value affects/removes other state property value.
       * SOLUTION:
       * 1. BAD: Change other properties of the object to existing value. DIFFICULT to set all values.
       * 2. just use ...stateObjName e.g. setData({ ...data, name: event.target.value });
       * CHECK functions changeName & changeAge
       */}
      Name:
      <input value={data.name} onChange={(event) => changeVal(event, "name")} />
      {/* BETTER: onChange={(e) => { changeName(event.target.value }} */}
      &emsp; AGE:
      <input value={data.age} onChange={(event) => changeVal(event, "age")} />
      {/* BETTER: onChange={(e) => { changeAge(event.target.value }} */}
      <br />
      <h2>RESULT:</h2>
      <h3>
        Name: {data.name} &emsp; &emsp; &emsp; &emsp; Age: {data.age}
      </h3>
    </div>
  );
}

export default MyApp;
