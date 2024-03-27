import { useState } from "react";
import User from "./component/Vid_070_User";

/** Using hooks denotes tha we have to use functional component, not class component.  */
function MyApp() {
  const [random, setRandom] = useState(Math.floor(Math.random() * 10));

  return (
    <div className="App" style={{ backgroundColor: "lightcyan" }}>
      <h1>Previous Props using Hooks</h1>
      <User val={random} />
      <button onClick={() => setRandom(Math.floor(Math.random() * 10))}>
        Change
      </button>
    </div>
  );
}

export default MyApp;
