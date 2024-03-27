import React, { useState } from "react";

function MyApp() {
  const [usr, setUsr] = useState("");
  const [pwd, setPwd] = useState("");
  const [print, setPrint] = useState(false);

  function setUsrnm(txt) {
    setUsr(txt.target.value); // console.warn(txt.target.value);
    setPrint(false);
  }
  function setPswrd(pwd) {
    setPwd(pwd.target.value); // console.warn(txt.target.value);
    setPrint(false);
  }

  return (
    <div className="App">
      <h2>Get input box value</h2>
      <input type="text" onChange={setUsrnm} placeholder="username"></input>
      <br />
      <input type="password" onChange={setPswrd} placeholder="password"></input>
      <br />
      <button
        onClick={() => setPrint(!print)}
        style={{ marginBottom: 30, marginTop: 10 }}
      >
        Print/Hide
      </button>

      {print ? (
        <div>
          <b style={{ display: "block" }}>Will hide upon changing text.</b>
          <b> Username:</b>&nbsp;{usr}&emsp;&emsp;&emsp;
          <b> Password:</b>&nbsp;{pwd}
        </div>
      ) : null}
    </div>
  );
}

export default MyApp;
