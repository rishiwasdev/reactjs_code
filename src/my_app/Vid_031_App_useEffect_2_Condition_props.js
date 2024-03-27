import React, { useState } from "react";
import User from "./component/Vid_031_User_useEffect";

function MyApp() {
  const [num, setNum] = useState(10);
  const [cnt, setCnt] = useState(100);

  return (
    <div className="App">
      <h2>Hook-1 - useEffect</h2>
      <User count={cnt} data={num} />
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        Add Count
      </button>
      &emsp;
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Add Data
      </button>
      <h6>Clicking either data or count button runs corresponding useEffect.</h6>
    </div>
  );
}

export default MyApp;
