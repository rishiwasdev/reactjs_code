import { useEffect, useState } from "react";

function MyApp() {
  const [data, setData] = useState("");

  useEffect(() => {
    getList();
  }, []); // blank array => runs once

  function getList() {
    fetch("http://localhost:8080/test/students").then((result) => {
      result.json().then((resp) => {
        console.log("Response:", resp);
        setData(resp);
      });
    });
  }

  function deleteUser(id) {
    fetch(`http://localhost:8080/test/students/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log("Response:", resp);
        getList();
      });
    });
  }

  return (
    <div className="App">
      <h1>DELETE API Call</h1>
      <table border="1" style={{ padding: 5, backgroundColor: "beige" }}>
        <thead>
          <tr className="text">
            <th colSpan={4}>STUDENTS</th>
          </tr>
          <tr className="text">
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item) => (
              <tr key={item.id} className="number">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <button onClick={() => deleteUser(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyApp;
