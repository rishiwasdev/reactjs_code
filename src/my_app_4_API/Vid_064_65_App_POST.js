import { useState } from "react";
import GET from "./Vid_063_App_GET";

function MyApp() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [added, setAdded] = useState(false);

  function saveUser() {
    // console.log({ id, name, age });
    if (id === "" || name === "" || age === "") {
      alert("Please fill all fields.");
      return false;
    }
    let data = { id, name, age };
    fetch("http://localhost:8080/test/students", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.log("resp:", resp);
        setAdded(true); // assuming it's success
      });
    });
  }

  function addNext() {
    // setAdded(false); // to show the form again
    // setId(""); setName(""); setAge("");
    window.location.reload();
  }

  return (
    <div className="App">
      <h1>POST API Example</h1>
      <div style={{ margin: 10, padding: 10, backgroundColor: "beige" }}>
        <GET />
      </div>
      {added ? (
        <div style={{ margin: 10, padding: 10, backgroundColor: "lightgreen" }}>
          <h3>SAVED</h3>
          <button onClick={addNext}>Add More Student</button> <br />
          (Refreshes page to see updated data, should not)
        </div>
      ) : (
        <div style={{ margin: 10, padding: 10, backgroundColor: "lightcyan" }}>
          <h3>Add Student</h3>
          <input
            type="text"
            name="id"
            placeholder="id"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <br /> <br />
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br /> <br />
          <input
            type="text"
            name="age"
            placeholder="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <br /> <br />
          <button onClick={saveUser}>Save Student</button>
        </div>
      )}
    </div>
  );
}

export default MyApp;
