import { useEffect, useState } from "react";

function MyApp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
  }, []); // blank array => runs once

  function getList() {
    fetch("http://localhost:8080/test/students").then((result) => {
      result.json().then((resp) => {
        setData(resp); // console.log("Response:", resp);
      });
    });
  }

  console.log("Data:", data);

  return (
    <div className="App">
      <h1>GET API Call</h1>
      <table border="1">
        <thead>
          <tr className="text">
            <th colSpan={3}>STUDENTS</th>
          </tr>
          <tr className="text">
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item) => (
              <tr key={item.id} className="number">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyApp;
