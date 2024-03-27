import { useState } from "react";

function MyApp() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");

  function getFormData(e) {
    e.preventDefault(); // stops form from submitting itself
    console.warn(name + ", " + tnc + ", " + interest);
  }

  function clearVal() {
    setName("");
    setInterest("Select");
    setTnc(false);
  }

  return (
    <div className="App">
      <h2>Forms</h2>
      <form onSubmit={getFormData}>
        <input
          type="text"
          // set value={name} so that can be cleared by 'Clear' button click
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: 10 }}
        />
        <br />
        {/* set value={interest} so that can be cleared by 'Clear' button click */}
        <select value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option>Select</option>
          <option>Marvel</option>
          <option>DC</option>
          <option>Diamond</option>
        </select>
        <br />
        <input
          style={{ marginTop: 20 }}
          type="checkbox"
          // set checked={tnc} so that can be cleared by 'Clear' button click
          checked={tnc}
          onChange={(e) => setTnc(e.target.checked)}
        />
        <span>Accept T&Cs</span>
        <br />
        <button type="submit" style={{ marginTop: 10 }}>
          Submit
        </button>
        &emsp;
        <button onClick={clearVal}>Clear</button>
      </form>
    </div>
  );
}

export default MyApp;
