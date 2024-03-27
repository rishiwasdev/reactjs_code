import { useEffect, useState } from "react";

/**Required to learn for API PUT method  */
function MyApp() {
  const [users, setUsers] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    getStudents();
  }, []); // blank array => runs once

  function getStudents() {
    fetch("http://localhost:8080/test/students").then((result) => {
      result.json().then((resp) => {
        console.log("Response:", resp);
        setUsers(resp);
        setId(resp[0].id);
        setName(resp[0].name);
        setAge(resp[0].age);
      });
    });
  }

  function deleteUser(id) {
    fetch(`http://localhost:8080/test/students/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log("Response:", resp);
        getStudents();
      });
    });
  }

  function selectUser(id) {
    let user = users[--id]; // coz it's 0-index based
    setId(user.id);
    setName(user.name);
    setAge(user.age);
  }

  return (
    <div className="App">
      <h1>Prefill Data (For PUT (Update) operations)</h1>
      <table border="1" style={{ padding: 5, backgroundColor: "beige" }}>
        <thead>
          <tr className="text">
            <th colSpan={5}>STUDENTS</th>
          </tr>
          <tr className="text">
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th colSpan={2}>Operations</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((item) => (
              <tr key={item.id} className="number">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <button onClick={() => selectUser(item.id)}>Select</button>
                </td>
                <td>
                  <button onClick={() => deleteUser(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div style={{ margin: 20, padding: 5, backgroundColor: "lightcyan" }}>
        <h4>UPDATE USER</h4>
        <input value={id} readOnly style={{ backgroundColor: "lightgrey" }} />
        <br /> <br />
        <input value={name} readOnly /> <br /> <br />
        <input value={age} readOnly /> <br /> <br />
        <button>Update</button>
      </div>
    </div>
  );
}

export default MyApp;
