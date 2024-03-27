import React from "react";

function MyApp() {
  const [txt, setTxt] = React.useState("");
  const [hide, setHide] = React.useState(true);

  function setTxtVal(e) {
    setTxt(e.target.value);
  }

  return (
    <div className="App">
      <h2>Hide Show Toggle</h2>
      <div>
        <input type="text" onChange={setTxtVal} style={{ marginBottom: 10 }} />
      </div>

      <div>
        <button onClick={() => setHide(true)}> Hide </button> &emsp;
        <button onClick={() => setHide(false)}>Show </button> &emsp;
        <button onClick={() => setHide(!hide)}>Toggle</button>{" "}
        {/* toggle => reverse current value */}
      </div>

      <table border="1" style={{ margin: "auto", marginTop: 20 }}>
        <thead>
          <tr>
            <th>Hidden</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "yellow" }}>
            <td> {hide.toString()}</td>
            <td> {hide ? null : txt}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyApp;
